
  const visObject = {
      /**
       * Configuration options
       **/
       options: {
          
       },
      
      /**
       * The create function gets called when the visualization is mounted but before any
       * data is passed to it.
       **/
        create: function(element, config){
          this.svg = d3.select(element).append('svg');
        },
     
      /**
       * UpdateAsync is the function that gets called (potentially) multiple times. It receives
       * the data and should update the visualization with the new data.
       **/
        updateAsync: function(data, element, config, queryResponse, details, doneRendering){
            console.log("data", data, "queryResponse", queryResponse);

            this.trigger("loadingEnd");
            doneRendering();
         }
     };
     
     looker.plugins.visualizations.add(visObject);