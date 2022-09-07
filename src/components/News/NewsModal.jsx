import "./NewsModal.css";

function NewsModal(props) {
  return (
    <>
      <div id="modal">
        <div class="Populer-modal modal fade " id={`exampleModalLg-${props.id}`} tabindex="-1" aria-labelledby="exampleModalLgLabel" aria-modal="true" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="Close-modal" data-bs-dismiss="modal">
                <b>Close</b>
              </div>

              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-12">
                    <div class="modal-body">
                      <h2 class="text-uppercase">{props.title}</h2>
                      <hr />
                      <p>{props.deskripsi}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsModal;
