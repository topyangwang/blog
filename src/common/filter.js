const formatDate =function(val,format){
  let date =new Date(val)
  if(/(y+)/.test(format)){
    format = format.replace(RegExp.$1, (date.getFullYear()+''))
  }
  let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      let str = o[k] + ''
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? str : str.padStart(2,'0'))
    }
  }
  // yyyy-MM-dd hh:mm:ss
  return format;
}

export {formatDate}