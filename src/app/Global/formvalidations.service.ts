import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormvalidationsService {
  msg = [];
  constructor() { }

  
  strip_lspaces(element) {
    /// <summary>Trims left spaces of a control's value</summary>
    /// <param name="element" type="string"></param>
    if (element !== '') {
      while ('' + element.charAt(0) === ' ') {
        element = element.substring(1, element.length);
      }
    }
    return element;
  }

  isEmpty(val) {
    if (val === '' || val === undefined || val === null || val.length === 0) { return true; } else { return false; }
  }

  isSelect(val) {
    if (val === '0' || val === undefined || val === null) { return true; } else { return false; }
  }

  isValidImage(val) {
    const ext = (val.split('.').pop()).toLowerCase();
    if (ext !== 'png' && ext !== 'jpg' && ext !== 'jpeg' && ext !== 'gif') {
      return true;
    } else { return false; }
  }

  isNotPhoneNumber(phone) {
    /// <summary>Validates Phone number.</summary>
    /// <param name="phone" type="string"></param>
    let sep;
    if (phone.length !== 0) {
      sep = this.getseparator(phone, '-');
    }
    if ((phone.length !== 0) && (phone.length < 12 || phone.length > 12)) {
      return true;
    } else if ((isNaN(phone.substring(0, 3))) || (isNaN(phone.substring(4, 7))) || (isNaN(phone.substring(8, 12)))) {
      return true;
    } else if ((sep !== '') && (phone.length !== 0)) {
      if ((phone.indexOf(sep) !== 3) || (phone.lastIndexOf(sep) !== 7)) {
        return true;
      }
    } else if (sep === '') {
      return true;
    }
    return false;
  }

  getseparator(val, separator) {
    /// <summary>checks whether separator exists in val or not.</summary>
    /// <param name="value" type="string"></param>
    /// <param name="separator" type="string"></param>
    if (val.indexOf(separator) !== -1) { return separator; } else {
      return '';
    }
  }

  isNotAnEmail(email) {
    /// <summary>Validates email.</summary>
    /// <param name="email" type="string"></param>
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) { return true; }
    return false;
  }

  isNotAlphaNumeric(val) {
    /// <summary>Validates string without special characters (Alpha numaric).</summary>
    /// <param name="val" type="string"></param>
    // tslint:disable-next-line: max-line-length
    const arraychars = new Array('\\', '@', '\'', '~', '!', '#', '$', '%', '^', '&', '*', '+', '<', '>', '=', '(', ')', '|', '"', '/', ';', '`', ',');
    for (let p = 0; p < val.length; ++p)
      for (let j = 0; j < arraychars.length; ++j)
        if (val.charAt(p) === arraychars[j])
          return false;

  }

  isValidZip(val) {
    if (!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(val)) { return true; }
    return false;
  }
  formatphonenumber1(phone) {
    var p = phone;
    var pp = '';
    phone = phone.currentTarget.value;

    if (phone.length > 0) {
        if (phone.length <= 3) {
            pp = '';
            for (let c = 0; c < phone.length; c++) {
                if (isNaN(phone.charAt(c)) || phone.charAt(c) == ' ')
                    continue;
                else
                    pp = pp + phone.charAt(c);
            }

            p.value = pp;
        }
        else if (phone.length > 3) {
            var pAry = phone.split('-');
            phone = '';

            for (let r = 0; r < pAry.length; r++)
                if (pAry[r])
                    phone += pAry[r];

            pp = '';
            for (let c = 0; c < phone.length; c++) {
                if (isNaN(phone.charAt(c)) || phone.charAt(c) == ' ')
                    continue;
                else
                    pp = pp + phone.charAt(c);
            }

            if (pp.length > 10)
                pp = pp.substring(0, 3) + '-' + pp.substring(3, 6) + '-' + pp.substring(6, 10);
            else if (pp.length > 6)
                pp = pp.substring(0, 3) + '-' + pp.substring(3, 6) + '-' + pp.substring(6);
            else
                pp = pp.substring(0, 3) + '-' + pp.substring(3, 6);
            p.value = pp;
        }
    }
    if (p.value == '-') p.value = '';
    return p.value;
}
  formatphonenumber(phone) {

    let p = phone;
    let pp = '';

    if (phone.length > 0) {
      if (phone.length <= 3) {
        pp = '';
        for (let c = 0; c < phone.length; c++) {
          if (isNaN(phone.charAt(c)) || phone.charAt(c) == ' ') {
            continue;
          } else {
            pp = pp + phone.charAt(c);
          }
        }

        p = pp;
      } else if (phone.length > 3) {
        const pAry = phone.split('-');
        phone = '';

        // tslint:disable-next-line: prefer-for-of
        for (let r = 0; r < pAry.length; r++) {
          if (pAry[r]) {
            phone += pAry[r];
          }
        }

        pp = '';
        for (let c = 0; c < phone.length; c++) {
          if (isNaN(phone.charAt(c)) || phone.charAt(c) === ' ') {
            continue;
          } else {
            pp = pp + phone.charAt(c);
          }
        }

        if (pp.length > 10) {
          pp = pp.substring(0, 3) + '-' + pp.substring(3, 6) + '-' + pp.substring(6, 10);
        } else if (pp.length > 6) {
          pp = pp.substring(0, 3) + '-' + pp.substring(3, 6) + '-' + pp.substring(6);
        } else {
          pp = pp.substring(0, 3) + '-' + pp.substring(3, 6);
        }
        p = pp;
      }
    }
    if (p === '-') { p = ''; }
    return p;
  }

  clearErrorMessages() {
    this.msg = [];
  }

  addErrorMessage(val) {
    this.msg.push({ msg: val });
  }

  displayErrors() {
    if (this.msg.length > 0) {
      // this.alert.warning(this.msg);
      this.msg = [];
      return false;
    } else { this.msg = []; return true; }
  }
  isNotValidAlphabets(field) {
    const valid = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ. ';
    let ok = 'yes';
    let temp;
    for (let i = 0; i < field.length; i++) {
        temp = '' + field.substring(i, i + 1);
        if (valid.indexOf(temp).toString() === '-1') { ok = 'no';
        }
    }
    if (ok === 'no') {
        return true;
    } else {
        return false ;
    }
}
}
