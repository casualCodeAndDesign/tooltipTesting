$('[data-toggle="tooltip"]').each(function () {
    var self = this;
    $.ajax({
        url: '/Content/tooltip.xml',
        type: 'get',
        dataType: 'xml',
        success: function(data, textStatus)
        {
            console.log("DATA IS: " + data);
            var content = $(data).find('tooltip[id="' + self.id + '"]').text();
            console.log("THIS IS THE CONTENT NOW: " + content);
            console.log("This is the content: " + content)
            // Parse the content
            console.log("THIS ID: " + self.id);
            //var content = $(data).find(self.id).text();
            console.log("################################# TOOLTIP CONTENT ###################################");
            console.log(content);
            content = content.trim();
            //  Update the tooltip content
            $(self).prop('title', content);
        }
    })
})