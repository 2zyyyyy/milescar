#  milescar 服务端开发问题记录
****
### gRPC(RPC:remote procedure call 远程过程调用)
1. 生成trip_grpc.pb.go文件对应命令：
   >>protoc --go-grpc_out=paths=source_relative:gen/go trip.proto
2. client/main.go中trippb.RegisterTripServiceServer提示：
   >>无法将 '&trip.Service{}' (类型 *trip.Service) 用作类型 TripServiceServer
   > 
    需要使用trippb中的结构体。
    >>type Service struct { trippb.UnimplementedTripServiceServer }
3. grpc.WithInsecure已弃用：
   >>使用grpc.WithTransportCredentials(insecure.NewCredentials())
   > 
4. 1