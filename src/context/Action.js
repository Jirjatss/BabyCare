import Swal from "sweetalert2";

export function addCart(dispatch, state) {
  Swal.fire({
    title: "Sweet!",
    text: "Berhasil Masuk ke Keranjang",
    icon: "success",
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
  });
  console.log(state);
  return dispatch({
    type: "ADD_CART",
    addCart: state,
  });
}
