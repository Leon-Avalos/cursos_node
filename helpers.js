
export function make_error (err, msg) {
    var e = new Error(msg)
    e.code = err
    return e
}

export function send_sucess (res, data) {
    res.writeHead(200, { "Content-Type": "application/json" })
    var output = { error: null, data: data }
    res.end(JSON.stringify(output) + "\n")
}

export function send_failure (res, code, err) {
    var code = (err.code) ? err.code : err.name
    res.writeHead(code, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ error: code, message: err.message }) + "\n")
}

export function invalid_resource () {
    return make_error("invalid_resource",
        "the requested resource does not exist.")
}
