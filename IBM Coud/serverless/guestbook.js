/**
 * App
 */
const apiUrl = 'https://9114dae0.us-south.apigw.appdomain.cloud/guestbook';
const guestbook = {
  // recupera las entradas existentes del registro de visitas
  get() {
    return $.ajax({
      type: 'GET',
      url: `${apiUrl}/entries`,
      dataType: 'json'
    });
  },
  // agrega un registro
  add(name, email, comment) {
    console.log('Sending', name, email, comment)
    return $.ajax({
      type: 'PUT',
      url: `${apiUrl}/entries`,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        name,
        email,
        comment,
      }),
      dataType: 'json',
    });
  }
};

(function() {

  let entriesTemplate;

  function prepareTemplates() {
    entriesTemplate = Handlebars.compile($('#entries-template').html());
  }

  // recupera entradas y actualiza la UI
  function loadEntries() {
    console.log('Loading entries...');
    $('#entries').html('Recuperando entradas...');
    guestbook.get().done(function(result) {
      if (!result.entries) {
        return;
      }
      const context = {
        entries: result.entries
      }
      $('#entries').html(entriesTemplate(context));
    }).error(function(error) {
      $('#entries').html('Sin entradas');
      console.log(error);
    });
  }

  // intercepta el click del boton enviar, agrega la 
  // entrada y recarga en caso de exito
  $(document).on('submit', '#addEntry', function(e) {
    e.preventDefault();

    guestbook.add(
      $('#name').val().trim(),
      $('#email').val().trim(),
      $('#comment').val().trim()
    ).done(function(result) {
      // recarga las entradas
      loadEntries();
    }).error(function(error) {
      console.log(error);
    });
  });

  $(document).ready(function() {
    prepareTemplates();
    loadEntries();
  });
})();
