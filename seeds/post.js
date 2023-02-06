const { Post } = require('../models');

const postData = [
    {
        title: "Epic Games adds Unreal Engine 5.1 graphical fidelity to Fortnite",
        content: "As you might recall, Nanite vastly expands the number of polygons developers can use without taking a heavy frame rate toll. Epic says every brick, stone, wooden plank, and wall trim in the houses are individually modeled in real-time from millions of polygons. Natural environments are similarly rendered. Every stone, flower, and blade of grass is a stand-alone model. Trees now have poly counts of around 300,000.",
        user_id: 1
    },
    {
        title: "Did ChatGPT Write This Article?",
        content: "The academic landscape shifted dramatically in November 2022 with the launch of ChatGPT, a chatbot developed by OpenAI. ChatGPT is artificial intelligence software that can write essays, poems, code and perform other tasks traditionally done by humans.",
        user_id: 2
    },
    {
        title: "Rising rent: Why prices are only going higher",
        content: "If you rent your house or apartment, you are in a club with over 100 million other Americans. And you may be wondering, why has it become so expensive now to be in that club?",
        user_id: 2

    },
    {
        title: "Hours after its demise, the Chinese spy balloon was the star of the 'SNL' cold open",
        content: "Saturday Night Live kicked off last night's show by spoofing the latest suspected threat to national security: a Chinese balloon. The balloon, which the Biden administration believes the Chinese government was using for surveillance, became an internet celebrity when people began tracking its travels across U.S. airspace. China's Foreign Affairs Ministry said the balloon was for meteorological research and accidentally went adrift. But its presence led Secretary of State Antony Blinken to postpone a trip to Beijing amid rising tensions between the two nations",
        user_id: 5
    },
    {
        title: "YouTube tests users’ tolerance for increased ad loads",
        content: "The news: YouTube is trying to figure out exactly how many ads its users will tolerate before heading elsewhere. Some social media users in recent weeks have complained about seeing eight or even 10 consecutive unskippable pre-roll ads; before a video begins, YouTube typically will display two pre-roll ads. It’s not just pre-roll: Ad interruptions in larger videos might occur every few minutes, according to several Reddit postings. Recent tweets and Reddit threads reveal ad breaks with up to 10 consecutive, non-skippable advertisements. These longer interruptions seem to be happening more frequently lately, though users seem to be experiencing ad breaks of about five ads more commonly than breaks featuring 10. The fallout: While it’s hard to know how big this experiment was, there’s some noticeable outcry online.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;