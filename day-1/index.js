const dreidel = [' נ (Nun)',' ג (Gimmel)',' ה (Hay)',' ש (Shin)'];

module.exports = async function (context) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: dreidel[Math.floor(Math.random()*4)]
    };
};