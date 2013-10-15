$('.swipedelete').live('pageshow',function(event, ui){
    $('.plt').bind('swipe', function(e){
    
    	alert("swipe!");
        var $plt = $(this);

        // Check that there is no delete button on this list item
        if (!$plt.children('.aDeleteBtn')[0]) {
              // This disables links on the page.  If you click anywhere else, it removes the delete button
            $('.swipedelete').bind('tap click', function(e){
                $('.aDeleteBtn').remove();
                $('.swipedelete').unbind('tap click');
                return false;
            });
            // clear out any delete buttons on other lines
            $('.aDeleteBtn').remove();
            // create the delete button
            var $aDeleteBtn = $('<a>Delete</a>')
                .attr({
                'class': 'aDeleteBtn ui-btn-up-r',
                'id': $plt.attr('id')  // this tells me which list item to delete
            });
              // add the button to the list item
            $plt.prepend($aDeleteBtn);
            
            // Have the delete button delete the item           
            $('.aDeleteBtn').bind('tap click', function () {
                event.preventDefault();
                var $del = $(this);
                delPlt($del.attr('id'));  // do my real deletion
                $del.parent().remove(); // remove the row
            });
        }

        // if there was already is a delete button, remove it and let clicks function again.    
        else {
            $('.aDeleteBtn').remove();
            $('.swipedelete').unbind('tap click');
        }
    });
});