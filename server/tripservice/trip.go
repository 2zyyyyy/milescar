package trip

import (
	"context"
	trippb "milescar/proto/gen/go"
)

// Service implements trip service.
type Service struct {
	trippb.UnimplementedTripServiceServer
}

// GetTrip get a trip
func (*Service) GetTrip(c context.Context, req *trippb.GetTripRequest) (*trippb.GetTripResponse, error) {
	return &trippb.GetTripResponse{
		Id: req.Id,
		Trip: &trippb.Trip{
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
			},
			Status: trippb.TripStatus_FINISHED,
		},
	}, nil
}
