import React from 'react'
import Sidebar from '../components/Game/sidebar';
const { Client } = require('@notionhq/client');

const Game = ({ data }) => {
    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <Sidebar />
        </div>
    )
}

export const getStaticProps = async () => {
    const notion = new Client({
        auth: process.env.NOTION_KEY,
    });

    const data = await notion.databases.query({
        database_id: process.env.DATABASE_ID,
    });

    const questions = data.results.map(question => ({
        id: question.id,
        // category: question.properties.Category.Title.title[0].plain_text,
        // title: question.properties.Title.title[0].plain_text,
        // choices: question.properties.Choices.multi_select.map(
        //     (choice) => choice.name
        // ),
    }))

    return {
        props: {
            data,
        },
    };
};

export default Game