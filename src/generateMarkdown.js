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
${data.Manager}


${data.ManagerID}

${data.Manageremail}


${data.Managerofficenumber}

${data.EngineerUsername}


${data.EngineerID}


${data.EngineerEmail}

${data.EngineerGithub}

${data.InternUsername}

${data.InternID}

${data.InternEmail}

${data.InternGithub}
    
</body>
</html>
`;
}

module.exports = generateMarkdown;