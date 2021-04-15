import '../../script/component/search-bar.js';
import '../../script/component/club-list.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");

    const onButtonSearchClicked = async () => {
        try {
            const keyword = searchElement.value;
            const response = await fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`);
            const responseJson = await response.json();

            renderResult(responseJson.teams);

        } catch (error) {
            fallbackResult(error);

        }
    };

    const renderResult = results => {
        clubListElement.clubs = results;
    };

    const fallbackResult = message => {
        clubListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};


export default main;
