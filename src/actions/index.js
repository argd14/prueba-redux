// export const increment = (ml) => {
//     return {
//         type: 'INCREMENT',
//         payload: ml
//     }
// }
// export const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }

//--------------------------
export const counterAction = (type) => {
    let action ='';
    switch (type) {
        case 'INCREMENT':
            action = 'INCREMENT';
            break;
        case 'DECREMENT':
            action = 'DECREMENT';
            break;
            }
    return {
        type:action};
    }
