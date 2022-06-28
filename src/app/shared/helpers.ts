import Swal, { SweetAlertType, SweetAlertOptions } from 'sweetalert2'

// export const SWEET_ALERT = (
//     alert_title: string,
//     alert_text: string,
//     alert_type: SweetAlertType,
//     alert_icon: SweetAlertType,
//     confBtn = 'OK',
//     cancelBtn?: boolean,
//     html?: boolean,
//     cancelText?: string,
//   ) => {
//     const options = {
//       title: alert_title,
//       type: alert_type,
//       text: alert_text,
//       icon: alert_icon,
//       showCancelButton: !!cancelBtn,
//       reverseButtons: true,
//       confirmButtonClass: 'app_button secondary_btn',
//       confirmButtonText: confBtn,
//       cancelButtonClass: cancelBtn ? 'app_button cancel_btn' : '',
//       cancelButtonText: cancelText,
//     };
//     options[html ? 'html' : 'text'] = alert_text;
//     return Swal.fire(options);
// }

export const topEndAlert = (
  position: SweetAlertOptions['position'],
  alert_text: string,
  type: SweetAlertType
) => {
  const option = {
    position: position,
    type: type,
    text: alert_text,
    showConfirmButton: false,
    timer: 1700
  }
  return Swal.fire(option)
}

export const showAsyncLoader = (text: string) => {
  Swal.fire({
    text,
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    onOpen(modalElement: HTMLElement): void {
      Swal.showLoading();
    }
  });
};

export const closeAsyncLoader = () => {
  Swal.hideLoading();
  Swal.close();
};