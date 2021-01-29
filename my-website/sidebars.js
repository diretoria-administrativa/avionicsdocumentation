module.exports = {
    docs: [
        {
            Reuniões: ['reuniao/0801r', 'reuniao/1301r', 'reuniao/2001r', 'reuniao/2701r'],
        },
        {
            'Aurora v2': [
                {
                    Software: ['aurorav2/software/testes'],
                },
                {
                    Hardware: [
                        {
                            Placas: ['aurorav2/hardware/placas/eps', 'aurorav2/hardware/placas/cdhs', 'aurorav2/hardware/placas/rec', 'aurorav2/hardware/placas/cam',
                                {
                                    Integração: ['aurorav2/hardware/placas/integracao/epscdhs']
                                } 
                            ],
                        },
                        {
                            Altium: ['aurorav2/hardware/altium/drc'],
                        },
                        {
                            Fresadora: ['aurorav2/hardware/fresadora/dicas'],
                        }
                    ],
                }
            ], 
        },
        {
            Quimera: [
                {
                    Software: [
                        {
                        'Air Break': ['quimera/software/airbreak/algoritmo'],
                        }
                    ],
                },
                {
                    Hardware: [
                        {
                        'Tubo de Pitot': ['quimera/hardware/tubodepitot/sensores'],
                        }
                    ],
                },
            ],
        },
        {
            Outros: ['outros/dicasgerais', 'outros/styleguide'],
        }
    ],
};