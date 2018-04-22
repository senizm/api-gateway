const express = require('express');
const router = express.Router();
const PROTO_PATH = __dirname + '/../protos/location.proto';
const grpc = require('grpc');
const location_proto = grpc.load(PROTO_PATH).location;

router.get('/', function (req, res) {
    res.setHeader('Cache-Control', 'private, no-cache, must-revalidate');
    const lon = parseFloat(req.query.lon);
    const lat = parseFloat(req.query.lat);
    const grpcServerAddress = process.env.GRPS_SERVER_ADDRESS;

    console.log('Forwarding location %d - %d to grpc server at %s', lon, lat, grpcServerAddress);

    var client = new location_proto.Location(grpcServerAddress, grpc.credentials.createInsecure());

    client.shareLocation({longitude: lon, latitude: lat}, function(err, response) {
        if(!err) {
            res.status(200).json({
                message: 'location request forwarded'
            });
            console.log(response.message);
        } else {
            res.status(500).json({
                message: 'location request cannot be forwarded'
            });
            console.log(err.message);
        }
    });
});

module.exports = router;
