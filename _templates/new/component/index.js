module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'component_name',
        message: 'What is the component name?'
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Directory of component (optional)',
      },
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { component_name, dir } = answers
        const path = `${ dir ? `/${dir}` : `` }/${component_name}`
        const folder = `${ dir ? `${dir}/` : `` }`
        const absPath = `src/components${path}`
        return { ...answers, path, folder, absPath }
      })
  }
}
