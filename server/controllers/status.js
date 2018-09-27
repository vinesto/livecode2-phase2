const Status = require('../models/status')

const createStatus = function (req, res) {
    let { content } = req.body
    Status.create({
        content: content,
        userId: req.user.id
    })
        .then(function (newStatus) {
            res.status(200).json({
                message: "create status success",
                data: newStatus
            })
        })
        .catch(function (err) {
            res.status(400).json({
                message: "create status failed",
                erro: err.message
            })
        })
}

const getAllStatus = function (req, res) {
    Status.find({})
        .sort({ 'createdAt': 'desc' })
        .populate('userId')
        .then(function (status) {
            if (status) {
                res.status(200).json({
                    message: "status found",
                    data: status
                })
            } else {
                res.status(201).json({
                    message: "status not found"
                })
            }
        })
        .catch(function (err) {
            res.status(400).json({
                message: "error get status",
                error: err.message
            })
        })
}

const getMyStatus = function (req, res) {
    Status.find({ userId: req.user.id })
        .populate('userId')
        .then(function (status) {
            if (status) {
                res.status(200).json({
                    message: "status found",
                    data: status
                })
            } else {
                res.status(201).json({
                    message: "status not found"
                })
            }
        })
        .catch(function (err) {
            res.status(400).json({
                message: "error get status",
                error: err.message
            })
        })
}

const deleteStatus = function (req, res) {
    Status.findOneAndRemove({
        userId: req.user.id,
        _id: req.params.id
    })
        .then(function (status) {
            if (status) {
                res.status(200).json({ message: "delete status success" })
            } else {
                res.status(201).json({ message: "You are not authorized to access this page" })
            }
        })
        .catch(function (err) {
            res.status(400).json({
                message: "delete status success",
                error: err.message
            })
        })
}

module.exports = { createStatus, getAllStatus, getMyStatus, deleteStatus }