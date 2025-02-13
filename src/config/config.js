export const defaultConfig = {
  featureFlags:{
    logLevel:'NONE',
    environment:'local',
    isReturnEnabled:false
  },
  siteNbr:['522647'],
  baseUrls:{
    cattleServiceBaseUrl:"http://localhost:9898",
    locationBaseUrl:"",
    returnBaseUrl:"",
    inventoryBaseUrl:"",
    receivingUrl:"",
    lpnGeneratorUrl:"",
  }
}

export const setConfig=(config)=>{
  sessionStorage.setItem('VETA_INBOUND_CONFIG',JSON.stringify(config));
}

export const getConfig=()=>{
  return sessionStorage.getItem('VETA_INBOUND_CONFIG');
}