# 生成pb.go文件
protoc --go_out=plugins=grpc:. ./
# 生成.pb.go文件