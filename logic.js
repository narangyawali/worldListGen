

var show = document.getElementById("texta");
var showt = document.getElementById("textt");
var btn = document.querySelector("#button");
var save = document.querySelector("#save");
var filen = document.querySelector("#ofilename");
var allText ='';
var unique = [];
var ifilename;
var ofilename;
btn.addEventListener("click", getlist);
    
var input = document.getElementById("ifile");
    input.addEventListener("change" , readad );

    function readad(){
      	
			var fr=new FileReader();
            fr.readAsText(this.files[0]);
            ifilename = this.files[0].name;
           
            
            fr.onload=() => {
                show.value =fr.result;
                var allfile =fr.result.replaceAll(/[1234567890.-:,--<>=+'"!#@$%^&*()]/g , '');
                allfile = allfile.replaceAll(/[\n]/g,'')
                
                 //allfile = allfile.replaceAll(/\n/g ,'');
                //var allfile = allfile.replaceAll(/  +/g ,'');
                //allfile= allfile.replace(/\n/ig, '');
                console.log(allfile);
                var llist = allfile.split(/\s+/);
               // console.log(allfile);  
               console.log(llist);
            
               console.log(llist);
               let uniquee = [...new Set(llist)];
               

               for(var i=0;i<uniquee.length;i++){
                unique[i]=uniquee[i]

               }

            //    unique = Object.fromEntries(
            //      Object.entries(uniquee).sort(([,a],[,b]) => a-b)
            // );

            }
    }

function getlist(){
    console.log("unique type"+typeof(unique))
    //unique= unique.sort;
        if (unique.length!= 0){
            for(var i =0; i < unique.length ; i++){
                showt.value += unique[i];
                showt.value += '\n';
                //showt.value += ' ';
            }
        }

        else{
            getText();
            }

    }


    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.click();
        
        //element.style.display = 'none';
        //document.body.appendChild(element);
      // document.body.removeChild(element);
      }
      
    function makefile(){
        let readyfile ='';
        for(var i=0; i<unique.length;i++){

            readyfile += unique[i] + "\n";
        }
        readyfile = readyfile.trim();
        //readyfile =readyfile.replaceAll("\n","")
        return readyfile;
    }  

    save.addEventListener('click',function(){
        
        allText = makefile();

        console.log("last alltext "+ allText);
        ofilename= filen.value + ".txt";

        if(filen.value !='' ){
            download(filen.value,allText);

        }

        if(filen.value == '' ){
            let ifilenameP =ifilename.substring(0,ifilename.length-4);
            
             filename = 'word_list_of '+ifilenameP +'.txt';
            download(filename,allText);

        } 

    });

function getText(){
    var data = show.value;
    let allfile =data.replaceAll(/[1234567890.-:,--]/g , '');
    allfile = allfile.replaceAll(/[\n]/g,'')
    var llist = allfile.split(/\s+/);
   let uniquee = [...new Set(llist)];

   for(var i=0;i<uniquee.length;i++){
    unique[i]=uniquee[i]
   }

   if(filen.value==''){
       window.alert("you must give file name to save");
   }
    getlist();
}




