import jsPDF from 'jspdf';
/*
    this is the function that takes in all user input, and print out 
*/
function CreateDoc(InputList) {
    // Default format
    // 216mm x 279mm for Letter
    var doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'letter',
    });
    doc.setFont("times", "normal");
    doc.setFontSize(4.59);
    doc.text('testing, this is a line testing', 210.71, 4.23, {
        align: 'right',

    })
    doc.save('T1D_CareDirective.pdf')
}

/*
    Unit conversion sample:
    final form: 476.77px x 617px
    jspdf: 216mm x 279mm
    (Ratio is exactly the same)

    Header:
    align top: 9.35px/617px * 279mm = 4.23mm
    align right: 216mm - (476.77px - 286.69px - 178.4px)/476.77px * 216mm = 210.71mm
    text size: 10.13px/476.77px * 216mm = 4.58938mm
*/
//CreateDoc('hello');