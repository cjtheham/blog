const prompts = require('prompts');
const fs = require('fs');

(async () => {
    const title = await prompts({
        type: 'text',
        name: 'value',
        message: 'Post title?'
    });
    
    const tag = await prompts({
        type: 'text',
        name: 'value',
        message: 'Tags?'
    })
    
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    currentDate = cMonth + "-" + cDay + "-" + cYear ;
    
    let content = `---
date: '${currentDate}'
title: '${title.value}'
tags: ['${tag.value}', 'posts']
---
    
post content here`
    
    let fileTitle = title.value.replace(' ', '-').toLowerCase();

    await fs.writeFileSync(`./posts/${currentDate}-${fileTitle}.md`, content)
})();

