import React from "react"
import ReactDom from "react-dom";
import u from './u.jpg';
import "./comp1.css";

const books=[
{
    img:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.centralbooksonline.com%2Fskin%2Ffrontend%2Fultimo%2Fdefault%2Fimages%2Fgeneralbooks.jpg&imgrefurl=https%3A%2F%2Fwww.centralbooksonline.com%2F&tbnid=JwAOYkhvCItohM&vet=12ahUKEwi17bqTzuHtAhVSXXwKHac5BiAQMygzegQIARBD..i&docid=wZEoI_rfua2rwM&w=410&h=225&q=shop%20books&ved=2ahUKEwi17bqTzuHtAhVSXXwKHac5BiAQMygzegQIARBD',
    title:'randomtitle',
    author:'this is first book'
},
{
    img:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81RgFLvTEsL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FStationery-Shop-Marjan-Kamali%2Fdp%2F1982107480&tbnid=mXgWPIwYvii8dM&vet=12ahUKEwi17bqTzuHtAhVSXXwKHac5BiAQMygKegUIARDRAQ..i&docid=5fpZSkoF29ksbM&w=1400&h=2146&q=shop%20books&ved=2ahUKEwi17bqTzuHtAhVSXXwKHac5BiAQMygKegUIARDRAQ',
    title:'second book',
    author:'this is second book'
},
{
    img:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81RgFLvTEsL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FStationery-Shop-Marjan-Kamali%2Fdp%2F1982107480&tbnid=mXgWPIwYvii8dM&vet=12ahUKEwi17bqTzuHtAhVSXXwKHac5BiAQMygKegUIARDRAQ..i&docid=5fpZSkoF29ksbM&w=1400&h=2146&q=shop%20books&ved=2ahUKEwi17bqTzuHtAhVSXXwKHac5BiAQMygKegUIARDRAQ',
    title:'third book',
    author:'this is third book'
},
{
    img:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81RgFLvTEsL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FStationery-Shop-Marjan-Kamali%2Fdp%2F1982107480&tbnid=mXgWPIwYvii8dM&vet=12ahUKEwi17bqTzuHtAhVSXXwKHac5BiAQMygKegUIARDRAQ..i&docid=5fpZSkoF29ksbM&w=1400&h=2146&q=shop%20books&ved=2ahUKEwi17bqTzuHtAhVSXXwKHac5BiAQMygKegUIARDRAQ',
    title:'fourth book',
    author:'this is fourth book'
},
{
    img:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81RgFLvTEsL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FStationery-Shop-Marjan-Kamali%2Fdp%2F1982107480&tbnid=mXgWPIwYvii8dM&vet=12ahUKEwi17bqTzuHtAhVSXXwKHac5BiAQMygKegUIARDRAQ..i&docid=5fpZSkoF29ksbM&w=1400&h=2146&q=shop%20books&ved=2ahUKEwi17bqTzuHtAhVSXXwKHac5BiAQMygKegUIARDRAQ',
    title:'fifth book',
    author:'this is fifth book'
},
{
    img:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81RgFLvTEsL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FStationery-Shop-Marjan-Kamali%2Fdp%2F1982107480&tbnid=mXgWPIwYvii8dM&vet=12ahUKEwi17bqTzuHtAhVSXXwKHac5BiAQMygKegUIARDRAQ..i&docid=5fpZSkoF29ksbM&w=1400&h=2146&q=shop%20books&ved=2ahUKEwi17bqTzuHtAhVSXXwKHac5BiAQMygKegUIARDRAQ',
    title:'sixth book',
    author:'this is sixth book'
},
{
    img:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81RgFLvTEsL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FStationery-Shop-Marjan-Kamali%2Fdp%2F1982107480&tbnid=mXgWPIwYvii8dM&vet=12ahUKEwi17bqTzuHtAhVSXXwKHac5BiAQMygKegUIARDRAQ..i&docid=5fpZSkoF29ksbM&w=1400&h=2146&q=shop%20books&ved=2ahUKEwi17bqTzuHtAhVSXXwKHac5BiAQMygKegUIARDRAQ',
    title:'seventh book',
    author:'this is seventh book'
},
{
    img:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81RgFLvTEsL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FStationery-Shop-Marjan-Kamali%2Fdp%2F1982107480&tbnid=mXgWPIwYvii8dM&vet=12ahUKEwi17bqTzuHtAhVSXXwKHac5BiAQMygKegUIARDRAQ..i&docid=5fpZSkoF29ksbM&w=1400&h=2146&q=shop%20books&ved=2ahUKEwi17bqTzuHtAhVSXXwKHac5BiAQMygKegUIARDRAQ',
    title:'eigth book',
    author:'this is eight book'
},
{
    img:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81RgFLvTEsL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FStationery-Shop-Marjan-Kamali%2Fdp%2F1982107480&tbnid=mXgWPIwYvii8dM&vet=12ahUKEwi17bqTzuHtAhVSXXwKHac5BiAQMygKegUIARDRAQ..i&docid=5fpZSkoF29ksbM&w=1400&h=2146&q=shop%20books&ved=2ahUKEwi17bqTzuHtAhVSXXwKHac5BiAQMygKegUIARDRAQ',
    title:'ninth book',
    author:'this is nineth book'
},
{
    img:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81RgFLvTEsL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FStationery-Shop-Marjan-Kamali%2Fdp%2F1982107480&tbnid=mXgWPIwYvii8dM&vet=12ahUKEwi17bqTzuHtAhVSXXwKHac5BiAQMygKegUIARDRAQ..i&docid=5fpZSkoF29ksbM&w=1400&h=2146&q=shop%20books&ved=2ahUKEwi17bqTzuHtAhVSXXwKHac5BiAQMygKegUIARDRAQ',
    title:'tenth book',
    author:'this is tenth book'
},
];

    function Comp(){
        return(
            <div className='bk'>
            <section id='booklist'>
            {books.map((book)=>{
                const{img,title,author}=book;
                return<Book book={book}></Book>;
            })}
            </section>
            </div>
       );
    };

    const Book=(props)=>{
        const {img,title,author,children}=props.book;
        return(
            <article className='book'>
                 <img id="image" src={u}/>
                 <h1>{title}</h1>
                 <h4>{author}</h4>
                {children}
            </article>
        );
    }

   
ReactDom.render(<Comp/>,document.getElementById('root'));
export default Comp