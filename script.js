// your code here
document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const year = document.getElementById('year').value;

      const url = new URL(document.getElementById('url').textContent);
      url.searchParams.set('name', name);
      url.searchParams.set('year', year);

      document.getElementById('url').textContent = url.toString();
    });