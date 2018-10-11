/**
 * Created by lilit on 2018-10-01.
 */


export const getCategories = async () => {
    try {
        const categoriesResponse = await fetch('https://webmppcapstone.blob.core.windows.net/data/itemsdata.json');
        const categories = await categoriesResponse.json();
        return categories
    }
    catch (err) {
        console.log(err);
    }
};