const SplitCamelCase = (value) => {
    const REGEX = /(?<=[a-z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])/g;
    return value.replace(REGEX, ' ');
}

exports.HelloStranger = (req, res) => {
    res.status(200).send("Hello Stranger");
}

exports.HelloWithParamsName = (req, res) => {
    res.status(200).send(`Hello ${ SplitCamelCase(req.params.name) }`)
}

exports.HelloWithQueryName = (req, res) => {

}