import { history } from "../../../lib";
export const setSearchParams = (name, _value) => {
    console.log("SetSearchParams name", name, _value);
    let { code } = _value;
    code = code.toString();
    let searchParams = new URLSearchParams(window.location.search);
    const searchArray = Array.from(searchParams.entries());
    let searchMap = {};
    for (let pair of searchArray) {
        searchMap[pair[0]] = pair[1];
    }
    // console.log("get all", searchParams.getAll(name));
    let new_param;
    try {
        if (!searchMap[name]) {
            //add
            // console.log(1);
            new_param = code;
        } else {
            console.log('name', name);
            if (name === "price_min" || name === "price_max" || name === "sort_price" || name === 'page') {
                new_param = code;
            } else {
                // console.log("getAll", searchParams.getAll(name)[0].split("+"));
                const param_arr = searchParams.getAll(name)[0].split("+");
                if (param_arr.includes(code)) {
                    // console.log(3);
                    new_param = param_arr.filter((val) => val !== code).join("+");
                    if (!new_param.length) {
                        searchParams.delete(name);
                        // return;
                    }
                } else {
                    // console.log(2);
                    new_param = searchParams.get(name) + "+" + code;
                }
            }
        }
    } catch (e) {}
    searchParams.set(name, new_param);
    // console.log("searchParams end", searchParams.toString());
    // console.log("URLSearchParams array", searchArray);
    // console.log("URLSearchParams map", searchMap);
    history.push("/catalog?" + searchParams.toString());
};

export const getUrlParamsArray = (name) => {
    let searchParams = new URLSearchParams(window.location.search);
    try {
        return searchParams.getAll(name)[0].split("+") || [];
    } catch (e) {
        return [];
    }
};

export const getAllUrlParamsArray = () => {
    let searchParams = new URLSearchParams(window.location.search);
    try {
        return Array.from(searchParams.entries()) || [];
    } catch (e) {
        return [];
    }
};
