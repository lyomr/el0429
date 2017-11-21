var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing.ejs");
});


var places = [
        {name: "Beamish Open Air Museum", image: "https://i.imgur.com/4quJbnw.jpg", description: "An Open Air Museum devoted to the region's industrial and social heritage of the early 1800s and 1900s. By relocating original buildings such as houses, shops, a school and a farm, plus being on the site of the original coal mine this site provides a unique experience of the past"},
        {name: "Alnwich Castle", image: "https://i.imgur.com/oFIZFP6.jpg", description: "This magnificent Castle has had a long a colourful life. It has been at the centre of many of the country's famous historical events - from bloodthirsty battles between English and Scots to the dramatic intrigues of the Guy Fawkes plot. Oh, and it is also where the first Harry Potter was partly filmed.The Castle and its Gardens belong to the Duke of Northumberland and provide an excellent example of a privately owned Heritage site"},
        {name: "Wallington Hall", image: "https://i.imgur.com/lcnI2IV.jpg", description: "Wallington Hall, much-loved home to generations of the unconventional Trevelyan family. Displaying beautiful furniture, family paintings and treasured collections. This impressive, yet friendly house reflects the history of Northumberland in the huge pre-Raphaelite paintings around the remarkable Central Hall. The house is surrounded by an informal landscape of lawns, lakes, woodland, parkland and farmland, just waiting to be explored. There is also a beautiful walled garden hidden in the woods, a colourful haven of tranquility in all seasons"},
        {name: "Cragside House", image: "https://i.imgur.com/2SahpK1.jpg", description: "Enter the world of Lord Armstrong - Victorian inventor, innovator and landscape genius. Cragside house was truly a wonder of its age.  Discover the first house in the world to be lit by hydroelectricity. It contains ingenious gadgets, most of which are still working. The gardens are home to a diverse range of flora and hold one of the largest rock gardens in Europe which leads down to the Iron Bridge, which in turn leads to the formal garden."},
        {name: "Bamburg Castle & Seahouses Village", image: "https://i.imgur.com/7TwZmcn.jpg", description: "Built on the windswept Northumberland beach this iconic castle has a powerful presence overlooking the wild North sea.  Its history has taken it from the original throne of the Northumbrian kings defending the North against the Vikings, into being purchased, for a small amount of money, to become a school for local children and retreat for local women during the Victorian period by Lord Armstrong. It is now a visitor center and used for holidays"},
        // {name: "Theatre Royal", image: "", description: "Ballet – The Little Mermaid"},
        {name: "Warkworth Castle", image: "https://i.imgur.com/DG76Uis.jpg", description: "Warkworth Castle was once home to the powerful Percy family who now reside in Alnwick Castle. It remains one of the largest and most impressive fortresses in North East England. It was once home to 'Harry Hotspur', hero of many Border ballads and the bane of Scots raiders."},
         {name: "Dunstanburgh Castle", image: "https://i.imgur.com/j5Kwljk.jpg", description: "Dunstanburgh Castle was built at a time when relations between King Edward II and his most powerful baron, Earl Thomas of Lancaster, had become openly hostile. Lancaster began the fortress in 1313, and the latest archaeological research indicates that he built it on a far grander scale than was originally recognised, perhaps more as a symbol of his opposition to the king than as a military stronghold"},
        {name: "Durham Cathedral", image: "https://i.imgur.com/kR1x8t4.jpg", description: "As the Cathedral’s website claims this is one of Europe’s greatest Buildings and it is an outstanding example of Norman architecture. Still a working Cathedral it was built to house the shrine of Saint Cuthbert of Lindisfarne."}
        // {name: "Beamish Open Air Museum", image: "", description: ""}
];

app.get("/places", function(req, res){
    res.render("places", {places:places});
});

app.post("/places", function(req, res){
    // get data from form add to places array
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newPlace = {name: name, image: image, description: description};
    places.push(newPlace);
    
    // redirect back to places page
    res.redirect("/places");
});

app.get("/places/new", function(req, res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The EL0429 server has started!");
})
