
//Create function to iterate through valid XML file to generate based xml tree

//Add callbacks when icon is selected to bring up editor


//Set up animated tree transitions

// Left click - expand or contract hierarchy
// Right click - menu or edit


//For each node
// on node - right click -- open pop up menu to edit node properties - values specifically
// on node - left click -- expand or contract child nodes




function create_xml_tree () {


}

function create_layout() {

var cluster_layout = d3.layout.cluster()
  .size([800,600])
  .separation(function(a, b) {
    return ((a.parent == root) && (b.parent == root)) ? 3 : 1;
  });
}

function update_tree(source){

}

function load_json()
{

d3.json("/xml_tree_editorJS/data.json" , function(error, data) {

  console.log(data)

});
}

load_json();
