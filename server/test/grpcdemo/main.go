package main

import (
	"context"
	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/protobuf/encoding/protojson"
	"log"
	trippb "milescar/proto/gen/go"
	"milescar/tripservice"
	"net"
	"net/http"
)

func main() {
	log.SetFlags(log.Lshortfile)
	go startGRPCGateway()
	// grpc service
	listen, err := net.Listen("tcp", ":8081")
	if err != nil {
		log.Fatalf("failed to listen:%v\n", err)
	}
	s := grpc.NewServer()
	trippb.RegisterTripServiceServer(s, &trip.Service{})
	log.Fatalln(s.Serve(listen))
}

func startGRPCGateway() {
	ctx := context.Background()
	ctx, cancel := context.WithCancel(ctx)
	defer cancel()

	mux := runtime.NewServeMux(runtime.WithMarshalerOption(
		runtime.MIMEWildcard,
		&runtime.JSONPb{
			MarshalOptions: protojson.MarshalOptions{
				UseEnumNumbers: true,  // 枚举字段的值使用数字
				UseProtoNames:  false, // 传给 clients 的 json key 使用下划线驼峰命名（true则是'_'）
			},
		},
	))
	err := trippb.RegisterTripServiceHandlerFromEndpoint(
		ctx,
		mux,
		":8081",
		[]grpc.DialOption{
			grpc.WithTransportCredentials(insecure.NewCredentials()),
		},
	)
	if err != nil {
		log.Fatalf("cannot start grpc gateway:%v\n", err)
	}

	// http监听
	err = http.ListenAndServe(":8082", mux)
	if err != nil {
		log.Fatalf("cannot listen and server:%v\n", err)
	}
}
