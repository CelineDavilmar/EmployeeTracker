function generateMarkdown(data) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Tracker</title>
</head>
<body>
<box>
    <h1>${data.Manager}</h1>
    <h2>${data.ManagerID}</h2>
    <h3>${data.Manageremail}</h3>
    <h3>${data.Managerofficenumber}</h3>
</box>
<box>
    <h1>${data.EngineerUsername}</h1>
    <h2>${data.EngineerID}</h2>
    <h3>${data.EngineerEmail}</h3>
    <h3>${data.EngineerGithub}</h3>
</box>
<box>
    <h1>${data.InternUsername}</h1>
    <h2>${data.InternID}</h2>
    <h3>${data.InternEmail}</h3>
    <h3>${data.InternGithub}</h3>
</box>
</body>
</html>
`;
}

module.exports = generateMarkdown;