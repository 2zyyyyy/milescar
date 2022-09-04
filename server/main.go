package main

import (
	"context"
	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
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

	mux := runtime.NewServeMux()
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
