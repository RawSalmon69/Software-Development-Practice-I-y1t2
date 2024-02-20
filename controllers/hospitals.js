exports.getHospitals = (req,res,next) => {
    res.status(200).json({success : true, msg:'Show all hospitals'});
};

exports.getHospital = (req,res,next) => {
    res.status(200).json({success : true, msg:`Show hospital ${req.params.id}`});
};

exports.createHospital = (req,res,next) => {
    res.status(200).json({success : true, msg:'Create new hospitals'});
};

exports.updateHospital = (req,res,next) => {
    res.status(200).json({success : true, msg:`Update hospital ${req.params.id}`});
};

exports.deleteHospital = (req,res,next) => {
    res.status(200).json({success : true, msg:`Delete hospital ${req.params.id}`});
};