
export function Button({favorites}){



    const buttonFavorites = clickFavorites ? clickFavorites : '';

    return(
        <button>{favorites}</button>
    )

}