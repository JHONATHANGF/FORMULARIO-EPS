    $(function () {
        $('#FormWeb').bootstrapValidator({
            message: 'Error fatal ',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                nombre: {
                    validators: {
                        notEmpty: {
                            message: 'En el nombre, faltan datos'
                        }
                    }
                },
                apellido: {
                    validators: {
                        notEmpty: {
                            message: 'En el apellido, faltan datos'
                        }
                    }
                },
                FDN: {
                    validators: {
                        notEmpty: {
                            message: 'Por favor, faltan datos'
                        }
                    }
                },
                LDN: {
                    validators: {
                        notEmpty: {
                            message: 'faltan datos'
                        }
                    }
                },
                TD: {
                    validators: {
                        notEmpty: {
                            message: 'Rellene por favor'
                        }
                    }
                },
                listaDeLugarN: {
                    validators: {
                        notEmpty: {
                            message: 'Seleccione alguna por favor'
                        }
                    }
                },
               documento: {
                    validators: {
                        notEmpty: {
                            message: 'Seleccione alguna por favor'
                        },
                        regexp: {
                            regexp: /^[1-9]+$/,
                            message: 'El documento solo puede contener números mayor a 0'
                        }
                    }
               },
               fechExpedicion: {
                   validators: {
                       notEmpty: {
                           message: 'Por favor, faltan datos'
                       }
                   }
               },
               listaDeLugarExp: {
                   validators: {
                       notEmpty: {
                           message: 'Seleccione alguna por favor'
                       }
                   }
               },
               Ciudhabit: {
                   validators: {
                       notEmpty: {
                           message: 'No puede estar vacío'
                       }
                   }
               },
               Local: {
                   validators: {
                       notEmpty: {
                           message: 'No puede estar vacío, seleccione alguna de bogotá'
                       }
                   }
               },
              barr: {
                   validators: {
                       notEmpty: {
                           message: 'No puede estar vacío'
                       }
                   }
              },
             dir: {
                  validators: {
                      notEmpty: {
                          message: 'Faltan datos'
                      }
                  }
             },
             tel: {
                 message: 'El teléfono no es válido',
                 validators: {
                     notEmpty: {
                         message: 'El teléfono le falta datos'
                     },
                     regexp: {
                         regexp: /^[0-9]+$/,
                         message: 'El teléfono solo puede tener números positivos'
                     }
                 }
             },
             cel: {
                 message: 'El celular no es válido',
                 validators: {
                     notEmpty: {
                         message: 'El celular le falta datos'
                     },
                     regexp: {
                         regexp: /^[0-9]+$/,
                         message: 'El celular solo puede tener números positivos'
                     }
                 }
             },
             correo: {
                 validators: {
                     notEmpty: {
                         message: 'Faltan datos'
                     }
                 },
                 emailAddress: {
                     message: 'El correo no es válido'
                 }
             },
             RH: {
                 validators: {
                     notEmpty: {
                         message: 'Esta vacío y es importante'
                     }
                 }
             },
             vincu: {
                 validators: {
                     notEmpty: {
                         message: 'Esta vacío'
                     }
                 }
             },
            estr: {
                 validators: {
                     notEmpty: {
                         message: 'Esta vacío y es importante, favor seleccione alguna'
                     }
                 }
             },



           




            }
        });
});