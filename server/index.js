const express = require("express");
const euclid = require("./public/data");
const path = require("path");
const PORT = 4000;

const app = express();

function getProp(arr) {
  const propsCitedByArr = arr;
  return propsCitedByArr.map((prop) => {
    if (romRomanNumeral(prop) === false) {
      return "";
    } else {
      const [bookNum, propNum] = fromRomanNumeral(prop);
      return euclid["book" + bookNum]["prop" + propNum];
    }w
  });
}

//listens for get requests on the root directory
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "/index.html"));
});

//REST api handler for book and prop
app.get("/book/:book/prop/:prop", (req, res) => {
  const propLocation = req.params;
  const prop = euclid["book" + propLocation.book]["prop" + propLocation.prop];
  console.log(prop);

  Object.assign(prop, {
    book: propLocation.book,
    proposition: propLocation.prop,
    citedBy: {
      props: getProp(prop.propsCitedBy),
    },
    cited: {
      props: getProp(props.propsCited),
    },
  });

  res.json(prop);
});

//listen on localhost with PORT
app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});

/*
const response = {
  "text":"Proposition 1.On a given finite straight line to construct an equilateral triangle.Let AB be the given finite straight line.Thus it is required to constructan equilateral triangle on the straight line AB.With centre A and distance AB let the circle BCD be described; [Post. 3]again, with centre B and distance BA let the circle ACE be described; [Post. 3] and from the point C, in which the circles cut one another, to the points A, B let the straight lines CA, CB be joined. [Post. 1]Now, since the point A is the centre of the circle CDB,AC is equal to AB. [Def. 15]Again, since the point B is the centre of the circle CAE,BC is equal to BA. [Def. 15]But CA was also proved equal to AB;therefore each of the straight lines CA, CB is equal to AB.And things which are equal to the same thing are also equal to one another; [C.N. 1]therefore CA is also equal to CB.Therefore the three straight lines CA, AB, BC areequal to one another.Therefore the triangle ABC is equilateral; and it has been constructed on the given finite straight line AB.(Being) what it was required to do.1 2 3 4 5",
  "propsCited":[
     "Post. 3",
     "Post. 1",
     "Def. 15",
     "C.N. 1"
  ],
  "propsCitedBy":[
     "I. 2",
     "I. 10",
     "I. 11"
  ],
  cited: {
    props: {
      "Post 3": 'text...',
      "post 1": 'text...' 
    }
  },
  future: {
    props: {
      "Post 3": 'text...',
      "post 1": 'text...' 
    }
  }

}
*/
