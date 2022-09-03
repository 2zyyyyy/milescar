package main

import (
	"encoding/json"
	"fmt"
	"google.golang.org/protobuf/proto"
	trippb "milescar/proto/gen/go"
)

func main() {
	trip := trippb.Trip{
		Start:       "begin",
		End:         "finish",
		DurationSec: 200,
		FeeCent:     960,
		StartPos: &trippb.Location{
			Latitude:  30,
			Longitude: 120,
		},
		EndPos: &trippb.Location{
			Latitude:  35,
			Longitude: 115,
		},
		PathLocations: []*trippb.Location{
			{
				Latitude:  31,
				Longitude: 119,
			},
			{
				Latitude:  32,
				Longitude: 118,
			},
			{
				Latitude:  33,
				Longitude: 117,
			},
		},
		Status: trippb.TripStatus_FINISHED,
	}
	fmt.Println(&trip)
	b, err := proto.Marshal(&trip)
	if err != nil {
		panic(err)
	}
	// 0A05626567696E120666696E69736818C80120C007 字节流
	fmt.Printf("%X\n", b)

	// 字节流解码
	var c trippb.Trip
	err = proto.Unmarshal(b, &c)
	fmt.Println(&c)

	// json
	d, err := json.Marshal(&c)
	if err != nil {
		panic(err)
	}
	fmt.Printf("%s\n", d)
}
