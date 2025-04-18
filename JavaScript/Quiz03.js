// write a program to print Pass or Fail for less than 35 marks using function in js.
//  let marks = [20, 12, 30, 34, 21, 67, 45, 33, 45] 

function checkPassFail(marks) {
    marks.forEach(mark => {
        if (mark < 35) {
            console.log(`Mark: ${mark} - Fail`);
        } else {
            console.log(`Mark: ${mark} - Pass`);
        }
    });
}

let marks = [20, 12, 30, 34, 21, 67, 45, 33, 45];
checkPassFail(marks);
