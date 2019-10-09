export const ADD_FEATURE = "ADD_FEATURE";
export const addFeature = feature => {
    console.log(`addFeature AC, ${feature}`);
    return {type: ADD_FEATURE, payload: featureAdded};
};

export const REMOVE_ADDED = "REMOVE_ADDED";
export const removeAdded = feature => {
    console.log(`removeAdded AC, ${feature}`);
    return {type: REMOVE_ADDED, payload: featureRemoved};
};