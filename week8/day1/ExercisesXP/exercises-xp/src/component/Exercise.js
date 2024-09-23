
export const Exercise = () => {
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };


    return (
        <>
        <h1 style={style_header} >
        This is a Header
        </h1>
        <p className="para">This is a paragraph</p>
        <a href="">This is a link</a>
        <form>
            <label for="myinp">This is a Form:</label>
            <input type="text" id="myinp" name="myinp"></input>
            <input type="submit"></input>
        </form>

        </>
    )
}