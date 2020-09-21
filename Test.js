describe("TestCase to fetch list of top 50 movies list from IMDB", function()
{
it("Visits IMDB website and Store movies name in a list", function(){

//Visits the IMDB website
cy.visit("https://www.imdb.com/chart/top/");

//Storing 1st 50 movies
//cy.get('.titleColumn').should('have.length',250)


var arr = [];



const listItemTitle = $(".titleColumn td").each(function(){
    arr.push($(this).find("td").text()); //put elements into array
});