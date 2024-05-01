

function load() {
    if (typeof google === 'undefined' || !google.books) {
        // Handle the case where the google object is not available
        console.error('Google Books API not loaded');
        return;
      }
      google.books.load();
    
      function initialize() {
        var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
        viewer.load('ISBN:0738531367');
      }
    
      google.books.setOnLoadCallback(initialize);
}

export default load;