function sortByYear(a, b) {
    var sortStatus = 0;
 
    if (a.year > b.year) {
        sortStatus = -1;
    } else if (a.year < b.year) {
            sortStatus = 1;
    }
    return sortStatus;
}

var cvItems = [

    {
        title: 'Vertical EP and Green EP Progress at Cornell',
        authors: 'J. T. Maniscalco'.bold()+' (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'talk',
        journal: 'TESLA Technology Collaboration (TTC) Meeting, Vancouver, BC, Canada, Febuary 2019',
        published: true,
        status: 'published',
        downloadUrl: 'https://indico.desy.de/indico/event/21337/session/11/contribution/79/material/slides/0.pptx',
        year: 2019
    },

    {
        title: 'Infusion R&D at Cornell',
        authors: 'J. T. Maniscalco'.bold()+' (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'talk',
        journal: 'TESLA Technology Collaboration (TTC) Meeting, Vancouver, BC, Canada, Febuary 2019',
        published: true,
        status: 'published',
        downloadUrl: 'https://indico.desy.de/indico/event/21337/session/12/contribution/45/material/slides/0.pptx',
        year: 2019
    },

    {
        title: 'Low-Temperature Baking at Cornell',
        authors: 'J. T. Maniscalco'.bold()+' (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'talk',
        journal: 'TESLA Technology Collaboration (TTC) Meeting, Vancouver, BC, Canada, Febuary 2019',
        published: true,
        status: 'published',
        downloadUrl: 'https://indico.desy.de/indico/event/21337/session/17/contribution/55/material/slides/0.pptx',
        year: 2019
    },

    {
        title: 'Overview of Flux Trapping at Cornell',
        authors: 'J. T. Maniscalco'.bold()+' (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'talk',
        journal: 'TESLA Technology Collaboration (TTC)/ARIES Topical Workshop on Flux Trapping and Magnetic Shielding, Meyrin, Switzerland, November 2018',
        published: true,
        status: 'published',
        downloadUrl: 'https://indico.cern.ch/event/741615/contributions/3180346/attachments/1749877/2834857/Maniscalco_TTC_2018-11.pdf',
        year: 2018
    },

    {
        title: 'Fundamental Studies of Impurity Doping in 1.3 GHz and Higher Frequency SRF Cavities',
        authors: 'J. T. Maniscalco'.bold()+' (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'talk',
        journal: 'Proceedings of LINAC2018, Beijing, China',
        published: true,
        status: 'published',
        downloadUrl: 'https://accelconf.web.cern.ch/AccelConf/linac2018/talks/tupo054_talk.pdf',
        year: 2018
    },

    {
        title: 'Fundamental Studies of Impurity Doping in 1.3 GHz and Higher Frequency SRF Cavities',
        authors: 'J. T. Maniscalco'.bold()+', P. N. Koufalis, M. Liepe (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'proceedings',
        journal: 'Proceedings of LINAC2018, Beijing, China',
        published: true,
        status: 'published',
        downloadUrl: 'https://accelconf.web.cern.ch/AccelConf/linac2018/papers/tupo054.pdf',
        year: 2018
    },

    {
        title: 'Fundamental Studies of Impurity Doping in 1.3 GHz and Higher Frequency SRF Cavities',
        authors: 'J. T. Maniscalco'.bold()+', P. N. Koufalis, M. Liepe (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'proceedings',
        journal: 'Proceedings of LINAC2018, Beijing, China',
        published: true,
        status: 'published',
        downloadUrl: 'https://accelconf.web.cern.ch/AccelConf/linac2018/papers/tupo054.pdf',
        year: 2018
    },

    {
        title: 'Low-Temperature Baking and Infusion Studies for High-Gradient ILC SRF Cavities',
        authors: 'M. Ge, P. N. Koufalis, G. Kulina, M. Liepe, '+'J. T. Maniscalco'.bold()+' (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of LINAC2018, Beijing, China',
        published: true,
        status: 'published',
        downloadUrl: 'https://accelconf.web.cern.ch/AccelConf/linac2018/papers/tupo057.pdf',
        year: 2018
    },

    {
        title: 'Next Generation Nb'+'3'.sub()+'Sn Cavities for Linear Accelerators',
        authors: 'R. D. Porter, T. Arias, P. Cueva, D. L. Hall, M. Liepe, '+'J. T. Maniscalco'.bold()+', D. A. Muller, N. Sitaraman (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of LINAC2018, Beijing, China',
        published: true,
        status: 'published',
        downloadUrl: 'https://accelconf.web.cern.ch/AccelConf/linac2018/papers/tupo055.pdf',
        year: 2018
    },

    {
        title: 'A Computational Method for More Accurate Measurements of the Surface Resistance in SRF Cavities',
        authors: 'J. T. Maniscalco'.bold()+', M. Liepe (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'proceedings',
        journal: 'Proceedings of IPAC2018, Vancouver, BC, Canada',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/ipac2018/papers/wepmf042.pdf',
        year: 2018
    }, 

    {
        title: 'Updates on the DC Field Dependence Cavity',
        authors: 'J. T. Maniscalco'.bold()+', M. Liepe (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'proceedings',
        journal: 'Proceedings of IPAC2018, Vancouver, BC, Canada',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/ipac2018/papers/wepmf044.pdf',
        year: 2018
    }, 

    {
        title: 'Modeling of the Frequency and Field Dependence of the Surface Resistance of Impurity-Doped Niobium',
        authors: 'J. T. Maniscalco'.bold()+', P. N. Koufalis, M. Liepe (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'proceedings',
        journal: 'Proceedings of IPAC2018, Vancouver, BC, Canada',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/ipac2018/papers/wepmf046.pdf',
        year: 2018
    }, 

    {
        title: 'RF Test Result of N-Doped 500 MHz B-Cell Cavity at Cornell With BNL',
        authors: 'F. Furuta, M. Ge, T. Gruber, J. J. Kaufman, M. Liepe, '+'J. T. Maniscalco'.bold()+', J. Sears (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of IPAC2018, Vancouver, BC, Canada',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/ipac2018/papers/wepmf036.pdf',
        year: 2018
    }, 

    {
        title: 'Experimental Results on the Field and Frequency Dependence of the Surface Resistance of Niobium Cavities',
        authors: 'P. N. Koufalis, M. Liepe, '+'J. T. Maniscalco'.bold()+', T. E. Oseroff (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of IPAC2018, Vancouver, BC, Canada',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/ipac2018/papers/wepmf039.pdf',
        year: 2018
    }, 

    {
        title: 'Frequency Tuner Development at Cornell for the RAON Half Wave Resonators',
        authors: 'M. Ge, F. Furuta, T. Gruber, S. W. Hartman, M. Liepe, '+'J. T. Maniscalco'.bold()+', T. I. O\'Connell, P. J. Pamel, J. Sears, V. Veshcherevich (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of IPAC2018, Vancouver, BC, Canada',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/ipac2018/papers/wepmf043.pdf',
        year: 2018
    }, 

    {
        title: 'Performance of the Prototype SRF Half-Wave-Resonators Tested at Cornell for the RAON Project',
        authors: 'M. Ge, F. Furuta, T. Gruber, S. W. Hartman, M. Liepe, '+'J. T. Maniscalco'.bold()+', T. I. O\'Connell, P. J. Pamel, J. Sears, V. Veshcherevich (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of IPAC2018, Vancouver, BC, Canada',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/ipac2018/papers/wepmf045.pdf',
        year: 2018
    }, 

    {
        title: 'Performance of Samples With Novel SRF Materials and Growth Techniques',
        authors: 'T. E. Oseroff, M. Ge, M. Liepe, '+'J. T. Maniscalco'.bold()+', R. D. Porter (Cornell University (CLASSE), Ithaca, New York), S. R. McNeal (Ultramet, Pacoima, California), M. J. Sowa (Veeco-CNT, Medford, Massachusetts)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of IPAC2018, Vancouver, BC, Canada',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/ipac2018/papers/wepmf047.pdf',
        year: 2018
    }, 

    {
        title: 'Analysis of Mean Free Path and Field Dependent Surface Resistance',
        authors: 'J. T. Maniscalco'.bold()+' (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'talk',
        journal: 'TESLA Technology Collaboration (TTC) Topical Workshop, Batavia, IL, November 2017',
        published: true,
        status: 'published',
        downloadUrl: 'https://indico.fnal.gov/event/15177/session/1/contribution/20/material/slides/0.pdf',
        year: 2017
    },

    {
        title: 'The Importance of the Electron Mean Free Path for Superconducting RF Cavities',
        authors: 'J. T. Maniscalco'.bold()+', P. N. Koufalis, M. Liepe (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'talk',
        journal: 'Proceedings of SRF2017, Lanzhou, China',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/srf2017/papers/tuyaa01.pdf',
        year: 2017
    }, 

    {
        title: 'Design Updates on Cavity to Measure Suppression of Microwave Surface Resistance by DC Magnetic Fields',
        authors: 'J. T. Maniscalco'.bold()+', M. Liepe, R. D. Porter (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'proceedings',
        journal: 'Proceedings of SRF2017, Lanzhou, China',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/srf2017/papers/thpb005.pdf',
        year: 2017
    }, 

    {
        title: 'Analysis of the Anti-Q-Slope in Low-temperature Doped Niobium Cavities',
        authors: 'J. T. Maniscalco'.bold()+', F. Furuta, P. N. Koufalis, M. Liepe (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'proceedings',
        journal: 'Proceedings of SRF2017, Lanzhou, China',
        published: true,
        status: 'published',
        year: 2017
    }, 

    {
        title: 'Low-Temperature Doping of Niobium Cavities: What is Really Going On?',
        authors: 'P. N. Koufalis, M. Liepe, '+'J. T. Maniscalco'.bold()+' (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of SRF2017, Lanzhou, China',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/srf2017/papers/tuxba01.pdf',
        year: 2017
    }, 

    {
        title: 'Update on Sample Host Cavity Design Work for Measuring Flux Entry and Quench Field',
        authors: 'R. D. Porter, M. Liepe, '+'J. T. Maniscalco'.bold()+', R. A. Strauss (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of SRF2017, Lanzhou, China',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/srf2017/papers/thpb044.pdf',
        year: 2017
    },

    {
        title: 'Effect of Chemical Treatments on the Surface Roughness and Surface Magnetic Field Enhancement of Niobium-3-Tin Films for Superconducting Radio Frequency Cavities',
        authors: 'R. D. Porter, F. Furuta, D. L. Hall, M. Liepe, '+'J. T. Maniscalco'.bold()+' (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of SRF2017, Lanzhou, China',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/srf2017/papers/thpb043.pdf',
        year: 2017
    },

    {
        title: 'High-Performance Thin Film Niobium Produced by Chemical Vapor Deposition',
        authors: 'R. D. Porter, D. L. Hall, M. Liepe, '+'J. T. Maniscalco'.bold()+' (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of SRF2017, Lanzhou, China',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/srf2017/papers/wexa03.pdf',
        year: 2017
    },

    {
        title: 'High-Frequency SRF Cavities',
        authors: 'T. E. Oseroff, D. L. Hall, M. Liepe, '+'J. T. Maniscalco'.bold()+' (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of SRF2017, Lanzhou, China',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/srf2017/papers/tupb009.pdf',
        year: 2017
    },

    {
        title: 'Cornell Sample Host Cavity: Recent Results',
        authors: 'J. T. Maniscalco'.bold()+', D. L. Hall, M. Liepe, R. Porter (Cornell University (CLASSE), Ithaca, New York), V. Arrieta, S. McNeal, B. Williams (Ultramet, Pacoima, California)',
        firstAuthor: true,
        type: 'proceedings',
        journal: 'Proceedings of IPAC2017, Copenhagen, Denmark',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/ipac2017/papers/mopva123.pdf',
        year: 2017
    }, 

    {
        title: 'Analysis of Mean Free Path and Field-Dependent Surface Resistance',
        authors: 'J. T. Maniscalco'.bold()+', F. Furuta, D. L. Hall, P. N. Koufalis, M. Liepe (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'proceedings',
        journal: 'Proceedings of IPAC2017, Copenhagen, Denmark',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/ipac2017/papers/wepva145.pdf',
        year: 2017
    }, 

    {
        title: 'Quench Studies in Single-Cell Nb'+'3'.sub()+'Sn Coating Using Vapour Diffusion',
        authors: 'D. L. Hall, P. Cueva, D. B. Liarte, M. Liepe, '+'J. T. Maniscalco'.bold()+', D. A. Muller, R. Porter, J. P. Sethna (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of IPAC2017, Copenhagen, Denmark',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/ipac2017/papers/mopva116.pdf',
        year: 2017
    }, 

    {
        title: 'Surface Analysis of Features Seen on Nb'+'3'.sub()+'Sn Coupons Grown by Vapour Diffusion',
        authors: 'D. L. Hall, T. Arias, P. Cueva, M. Liepe, '+'J. T. Maniscalco'.bold()+', D. A. Muller, R. Porter, N. Sitaraman (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of IPAC2017, Copenhagen, Denmark',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/ipac2017/papers/mopva119.pdf',
        year: 2017
    }, 

    {
        title: 'Effectiveness of Chemical Treatments for Reducing the Surface Roughness of Nb'+'3'.sub()+'Sn',
        authors: 'R. Porter, F. Furuta, D. L. Hall, M. Liepe, '+'J. T. Maniscalco'.bold()+' (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of IPAC2017, Copenhagen, Denmark',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/ipac2017/papers/mopva124.pdf',
        year: 2017
    }, 

    {
        title: 'Sample Host Cavity Design for Measuring Flux Entry and Quench',
        authors: 'R. Porter, M. Liepe, '+'J. T. Maniscalco'.bold()+', V. Veshcherevich (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of IPAC2017, Copenhagen, Denmark',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/ipac2017/papers/mopva126.pdf',
        year: 2017
    }, 

    {
        title: 'The Importance of the Electron Mean Free Path for Superconducting Radio-Frequency Cavities',
        authors: 'J. T. Maniscalco'.bold()+' (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'talk',
        journal: 'TESLA Technology Collaboration (TTC) Meeting, Lansing, MI, February 2017',
        published: true,
        status: 'published',
        downloadUrl: 'https://indico.fnal.gov/event/12662/session/1/contribution/29/material/slides/0.pdf',
        year: 2017
    },

    {
        title: 'Investigation of the Origin of the Anti-Q-Slope',
        authors: 'J. T. Maniscalco'.bold()+', M. Ge, D. Gonnella, M. Liepe (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'proceedings',
        journal: 'Proceedings of NAPAC2016, Chicago, IL',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/napac2016/papers/mopob65.pdf',
        year: 2016
    }, 

    {
        title: 'High Performance Next-Generation Nb'+'3'.sub()+'Sn Cavities for Future High-Efficiency SRF Linacs',
        authors: 'D. L. Hall, J. J. Kaufman, M. Liepe, '+'J. T. Maniscalco'.bold()+', R. Porter (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of LINAC2016, East Lansing, MI',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/linac2016/papers/tuop07.pdf',
        year: 2016
    }, 

    {
        title: 'Low Temperature Nitrogen Baking of an SRF Cavity',
        authors: 'P. N. Koufalis, F. Furuta, M. Ge, D. Gonnella, J. J. Kaufman, M. Liepe, '+'J. T. Maniscalco'.bold()+', R. Porter (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of LINAC2016, East Lansing, MI',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/linac2016/papers/tuprc025.pdf',
        year: 2016
    }, 

    {
        title: 'Surface Roughness Effect on the Performance of Nb'+'3'.sub()+'Sn Cavities',
        authors: 'R. Porter, D. L. Hall, M. Liepe, '+'J. T. Maniscalco'.bold()+' (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of LINAC2016, East Lansing, MI',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/linac2016/papers/moprc027.pdf',
        year: 2016
    }, 

    {
        title: 'Optimal Doping Level to Reach High Q'+'0'.sub(),
        authors: 'D. Gonnella, T. Gruber, J. Kaufman, P. N. Koufalis, M. Liepe, '+'J. T. Maniscalco'.bold()+' (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of LINAC2016, East Lansing, MI',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/linac2016/papers/tuplr025.pdf',
        year: 2016
    }, 

    {
        title: 'The Importance of the Electron Mean Free Path for Superconducting Radio-Frequency Cavities',
        authors: 'J. T. Maniscalco'.bold()+', D. Gonnella, M. Liepe (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'peer-reviewed',
        journal: 'Journal of Applied Physics '+'121'.bold()+', 043910',
        published: true,
        status: 'published',
        downloadUrl: 'http://aip.scitation.org/doi/pdf/10.1063/1.4974909',
        externalUrl: 'http://aip.scitation.org/doi/10.1063/1.4974909',
        year: 2017
    }, 

    {
        title: 'Estimated Gradient Limitation Insights for Different Surface Processing from Klystron Measurements',
        authors: 'J. T. Maniscalco'.bold()+' (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'talk',
        journal: 'TESLA Technology Collaboration (TTC) Meeting, Saclay, France, July 2016',
        published: true,
        status: 'published',
        downloadUrl: 'https://indico.in2p3.fr/event/12928/contributions/12080/attachments/10269/12726/maniscalco_ttc_saclay_2016.pdf',
        year: 2016
    },

    {
        title: 'Improved N-Doping Protocols for SRF Cavities',
        authors: 'D. Gonnella, R. Eichhorn, F. Furuta, M. Ge, T. Gruber, G. Hoffstaetter, J. Kaufman, P.N. Koufalis, M. Liepe, '+'J. T. Maniscalco'.bold()+' (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of IPAC2016, Busan, Korea',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/ipac2016/papers/wepmr025.pdf',
        year: 2016
    }, 
    {
        title: 'New Material Studies in the Cornell Sample Host Cavity',
        authors: 'J. T. Maniscalco'.bold()+', D. L. Hall, M. Liepe, (Cornell University (CLASSE), Ithaca, New York), O.B. Malyshev, R. Valizadeh (ASTeC, STFC Daresbury Laboratory, Warrington, UK), S. Wilde (ASTeC and Department of Physics, Loughborough University, Loughborough, UK)',
        firstAuthor: true,
        type: 'proceedings',
        journal: 'Proceedings of IPAC2016, Busan, Korea',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/ipac2016/papers/wepmr029.pdf',
        year: 2016
    }, 
    {
        title: 'Surface Analysis Studies of Nb'+'3'.sub()+'Sn Thin Films',
        authors: 'D. L. Hall, J. J. Kaufman, M. Liepe, '+'J. T. Maniscalco'.bold()+' (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of IPAC2016, Busan, Korea',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/ipac2016/papers/wepmr023.pdf',
        year: 2016
    }, 
    {
        title: 'RF Measurements on High Performance Nb'+'3'.sub()+'Sn Cavities',
        authors: 'D. L. Hall, M. Liepe, '+'J. T. Maniscalco'.bold()+' (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of IPAC2016, Busan, Korea',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/ipac2016/papers/wepmr024.pdf',
        year: 2016
    }, 
    {
        title: 'Dependence of Surface Resistance on N-Doping Level',
        authors: 'D. Gonnella, F. Furuta, M. Ge, J. Kaufman, P. N. Koufalis, M. Liepe, '+'J. T. Maniscalco'.bold()+' (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of IPAC2016, Busan, Korea',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/ipac2016/papers/wepmr027.pdf',
        year: 2016
    }, 
    {
        title: 'Studies on the Field-Dependence of the BCS Surface Resistance',
        authors: 'J. T. Maniscalco'.bold()+', D. Gonnella, G. H. Hoffstaetter, P. N. Koufalis, M. Liepe (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'proceedings',
        journal: 'Proceedings of IPAC2016, Busan, Korea',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/ipac2016/papers/wepmr028.pdf',
        year: 2016
    }, 
    {
        title: 'Pulsed Field Limits in SRF Cavities',
        authors: 'J. T. Maniscalco'.bold()+', D. Gonnella, D. L. Hall, P. N. Koufalis, and M. Liepe (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'proceedings',
        journal: 'Proceedings of IPAC2016, Busan, Korea',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/ipac2016/papers/wepmr030.pdf',
        year: 2016
    }, 
    {
        title: 'Impurity-Doping of Superconducting RF Cavities',
        authors: 'P. N. Koufalis, F. Furuta, M. Ge, D. Gonnella, J. J. Kaufman, M. Liepe, '+'J. T. Maniscalco'.bold()+' (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of IPAC2016, Busan, Korea',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/ipac2016/papers/thobb02.pdf',
        year: 2016
    },  


    {
        title: 'Understanding the Field Dependence of Surface Resistance in Nitrogen-Doped Cavities',
        authors: 'P. N. Koufalis, D. Gonnella, M. Liepe, '+'J. T. Maniscalco'.bold()+', I. Packtor (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of SRF2015, Whistler, BC, Canada',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/SRF2015/papers/mopb005.pdf',
        year: 2015
    },   
    {
        title: 'Developing a Setup to Measure Field Dependence of BCS Surface Resistance',
        authors: 'J. T. Maniscalco'.bold()+' and M. Liepe (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'proceedings',
        journal: 'Proceedings of SRF2015, Whistler, BC, Canada',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/SRF2015/papers/mopb005.pdf',
        year: 2015
    },       
    {
        title: 'Recent Results from the Cornell Sample Host Cavity',
        authors: 'J. T. Maniscalco'.bold()+', B. Clasby, T. Gruber, D. L. Hall, M. Liepe (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'proceedings',
        journal: 'Proceedings of SRF2015, Whistler, BC, Canada',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/SRF2015/papers/tupb030.pdf',
        year: 2015
    },       
    {
        title: 'H'+'C2'.sub()+' Measurements of Superconductors',
        authors: 'J. T. Maniscalco'.bold()+', D. Gonnella, D. L. Hall, M. Liepe, and E. Smith (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'proceedings',
        journal: 'Proceedings of SRF2015, Whistler, BC, Canada',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/SRF2015/papers/mopb006.pdf',
        year: 2015
    },   
    {
        title: 'Nb'+'3'.sub()+'Sn Cavities: Material Characterization and Coating Process Optimization',
        authors: 'D. L. Hall, T. Gruber, J. J. Kaufman, M. Liepe, '+'J. T. Maniscalco'.bold()+', S. Posen, B. Yu (Cornell University (CLASSE), Ithaca, New York), T. Proslier (Argonne National Lab, Argonne, Illinois)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of SRF2015, Whistler, BC, Canada',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/SRF2015/papers/tuba04.pdf',
        year: 2015
    },    
    {
        title: 'Niobium Impurity-Doping Studies at Cornell and CM Cool-down Dynamic Effect on Q'+'0'.sub(),
        authors: 'M. Liepe, B. Clasby, R. Eichhorn, F. Furuta, G.M. Ge, D. Gonnella, T. Gruber, D.L. Hall, G. Hoffstaetter, J. Kaufman, P. Koufalis, '+'J. T. Maniscalco'.bold()+', T. O\'Connell, P. Quigley, D. Sabol, J. Sears, E.N. Smith, V. Veshcherevich (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of SRF2015, Whistler, BC, Canada',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/SRF2015/papers/moba08.pdf',
        year: 2015
    },    
    {
        title: 'LCLS-II SRF Cavity Processing Protocol Development and Baseline Cavity Performance Demonstration',
        authors: 'M. Liepe, P. Bishop,  H. Conklin, R. Eichhorn, F. Furuta, G.M. Ge, D. Gonnella, T. Gruber, D. L. Hall, G. Hoffstaetter, J. Kaufman, G. Kulina, '+'J. T. Maniscalco'.bold()+', T. O\'Connell, P. Quigley, D. Sabol, J. Sears, V. Veshcherevich (Cornell University (CLASSE), Ithaca, New York), M. Checchin, A. Crawford, A. Grassellino, C. Grimm, A. Hocker, M. Martinello, O. Melnychuk, J. Ozelis, A. Romanenko, A. Rowe, D. A. Sergatskov W. Soyars, R. Stanek, R. Wang, G. Wu (Fermilab, Batavia, Illinois), M. Ross (SLAC, Menlo Park, California), E. Daly, K. Davis, M. Drury, J. Fischer, A. D. Palczewski, C. Reece (Jefferson Lab, Newport News, Virginia)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of SRF2015, Whistler, BC, Canada',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/SRF2015/papers/mopb033.pdf',
        year: 2015
    },    
    {
        title: 'Fundamental Studies on Doped SRF Cavities',
        authors: 'D. Gonnella, T. Gruber, J. Kaufman, P. Koufalis, M. Liepe, and '+'J. T. Maniscalco'.bold()+' (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of SRF2015, Whistler, BC, Canada',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/SRF2015/papers/mopb042.pdf',
        year: 2015
    },    
    {
        title: 'Surface Analysis and Material Property Studies of Nb'+'3'.sub()+'Sn on Niobium for Use in SRF Cavities',
        authors: 'D.L. Hall, H. Conklin, T. Gruber, J.J. Kaufman, M. Liepe, '+'J. T. Maniscalco'.bold()+', B. Yu (Cornell University (CLASSE), Ithaca, New York), T. Proslier (Argonne National Lab, Argonne, Illinois)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of SRF2015, Whistler, BC, Canada',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/SRF2015/papers/tupb045.pdf',
        year: 2015
    },    
    {
        title: 'Cryomodule Testing of Nitrogen-Doped Cavities',
        authors: 'D. Gonnella, B. Clasby, R. Eichhorn, B. Elmore, F. Furuta, M. Ge, D. Hall, Y. He, G. Hoffstaetter, J. Kaufman, P. Koufalis, M. Liepe, '+'J. T. Maniscalco'.bold()+', T. O\'Connell, P. Quigley, D. Sabol, J. Sears, E. Smith, V. Veshcherevich (Cornell University (CLASSE), Ithaca, New York), A. Grassellino, C. Grimm, J. Holzbauer, O. Melnychuk, Y. Pischalnikov, A. Romanenko, W. Schappert, D. Sergatskov (Fermilab, Batavia, Illinois), A. Palczewski, C. Reece (Jefferson Lab, Newport News, Virginia)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of SRF2015, Whistler, BC, Canada',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/SRF2015/papers/mopb041.pdf',
        year: 2015
    },


    {
        title: 'H'+'c2'.sub()+' Measurements of Nb'+'3'.sub()+'Sn and Nitrogen-Doped Niobium Using Physical Property Measurement System',
        authors: 'J. T. Maniscalco'.bold()+', D. Gonnella, D. L. Hall, M. Liepe, S. Posen (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'proceedings',
        journal: 'Proceedings of the 6'+'th'.sup()+' International Particle Accelerator Conference (IPAC)',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/IPAC2015/papers/wepty075.pdf',
        year: 2015
    },
    {
        title: 'RF Performance Studies of Thin-Film Superconductors Using a Sample Host Cavity',
        authors: 'J. T. Maniscalco'.bold()+', D. L. Hall, M. Liepe (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: true,
        type: 'proceedings',
        journal: 'Proceedings of the 6'+'th'.sup()+' International Particle Accelerator Conference (IPAC)',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/IPAC2015/papers/wepty076.pdf',
        year: 2015
    },
    {
        title: 'Update on Nitrogen-doped 9-cell Cavity Performance in the Cornell Horizontal Test Cryomodule',
        authors: 'D. Gonnella, R. G. Eichhorn, F. Furuta, M. Ge, D. L. Hall, Y. He, K. M. Vivian Ho, G. H. Hoffstaetter, M. Liepe, '+'J. T. Maniscalco'.bold()+', T. O\'Connell, S. Posen, P. Quigley, J. Sears, V. Veshcherevich (Cornell University (CLASSE), Ithaca, New York), A. Grassellino, C. Grimm, O. S. Melnychuk, A. S. Romanenko (Fermilab, Batavia, Illinois)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of the 6'+'th'.sup()+' International Particle Accelerator Conference (IPAC)',
        published: false,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/IPAC2015/papers/wepty072.pdf',
        year: 2015
    },
    {
        title: 'Update on Nitrogen Doping: Quench Studies and Sample Analysis',
        authors: 'D. Gonnella, F. Furuta, M. Ge, J. J. Kaufman, M. Liepe, '+'J. T. Maniscalco'.bold()+' (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of the 6'+'th'.sup()+' International Particle Accelerator Conference (IPAC)',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/IPAC2015/papers/wepty073.pdf',
        year: 2015
    },
    {
        title: 'Recent Studies on the Current Limitations of State-of-the-Art Nb'+'3'.sub()+'Sn Cavities',
        authors: 'D. L. Hall, M. Liepe, '+'J. T. Maniscalco'.bold()+', S. Posen (Cornell University (CLASSE), Ithaca, New York)',
        firstAuthor: false,
        type: 'proceedings',
        journal: 'Proceedings of the 6'+'th'.sup()+' International Particle Accelerator Conference (IPAC)',
        published: true,
        status: 'published',
        downloadUrl: 'http://accelconf.web.cern.ch/AccelConf/IPAC2015/papers/wepty074.pdf',
        year: 2015
    },


    {
        title: 'The Potential of Accelerating Early Detection of Autism through Content Analysis of YouTube Videos',
        authors: 'V. A. Fusaro, J. Daniels, M. Duda, T. F. DeLuca, O. D’Angelo, J. Tamburello, '+'J. T. Maniscalco'.bold()+', D. P. Wall (Harvard Medical School, Boston, Massachusetts)',
        firstAuthor: false,
        type: 'peer-reviewed',
        journal: 'PLoS ONE',
        published: true,
        status: 'published',
        downloadUrl: 'https://jacowfs.jlab.org/conf/y15/ipac15/prepress/WEPTY076.PDF',
        externalUrl: 'http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0093533',
        year: 2014
    }

].sort(sortByYear);


// generate list

for (var itemIndex in cvItems) {
    item = cvItems[itemIndex];
    var newElement = document.createElement('div');
    $(newElement).addClass('cvItem');
    $(newElement).addClass(item.type);
    $(newElement).addClass(item.firstAuthor ? 'firstAuthor' : 'supportingAuthor');
    $(newElement).addClass(item.published ? 'published' : 'pending');
    $(newElement).append('<div class="pubType">'+item.type+'</div>');
    $(newElement).append('<h4 class="pubTitle">'+item.title+'</h4>');
    $(newElement).append('<div class="pubAuthor">'+item.authors+'</div>');
    $(newElement).append('<div class="pubAssets">'+(item.downloadUrl ? '<a href="'+item.downloadUrl+'"><i class="fa fa-2x fa-download"></i></a>' : '' )+(item.externalUrl ? '<a href="'+item.externalUrl+'"><i class="fa fa-2x fa-external-link"></i></a>' : '' )+'</div>');
    $(newElement).append('<div class="pubJournal">'+item.journal+(item.published ? ', '+item.year+'.' : ('('+item.status+')').italics()+'.')+'</div>');
    $('#publicationList').append(newElement);
}


// register on any click of the buttons:
function updateCvItems() {
    var transitionTime = 400;
    // check the status of elements and add/remove 'hide' class
    if ($('#allPublications').prop('checked')) {
        if ($('#allTypes').prop('checked')) {
            $('.cvItem').removeClass('hide');
        };
        if ($('#peerReviewed').prop('checked')) {
            $('.cvItem').addClass('hide');
            $('.cvItem.peer-reviewed').removeClass('hide');
        };
        if ($('#proceedings').prop('checked')) {
            $('.cvItem').addClass('hide');
            $('.cvItem.proceedings').removeClass('hide');
        };
        if ($('#talks').prop('checked')) {
            $('.cvItem').addClass('hide');
            $('.cvItem.talk').removeClass('hide');
        };
    } else {
        if ($('#allTypes').prop('checked')) {
            $('.cvItem').addClass('hide');
            $('.cvItem.firstAuthor').removeClass('hide');
        };
        if ($('#peerReviewed').prop('checked')) {
            $('.cvItem').addClass('hide');
            $('.cvItem.peer-reviewed.firstAuthor').removeClass('hide');
        };
        if ($('#proceedings').prop('checked')) {
            $('.cvItem').addClass('hide');
            $('.cvItem.proceedings.firstAuthor').removeClass('hide');
        };
        if ($('#talks').prop('checked')) {
            $('.cvItem').addClass('hide');
            $('.cvItem.firstAuthor.talk').removeClass('hide');
        };
    }

    // hide/show relevant elements
    //$('.cvItem.hide').fadeOut({duration: transitionTime, queue: false}).slideUp(transitionTime);
    //$('.cvItem:not(.hide)').fadeIn({duration: transitionTime, queue: false}).css('display', 'none').slideDown(transitionTime);

    $('.cvItem.hide:visible').animate({"opacity": 0.0}, transitionTime).slideUp(transitionTime);

    $('.cvItem:not(.hide):hidden').css("visibility", "hidden").slideDown(transitionTime, function() {
        $(this).css("opacity", 0.0).css("visibility", "visible").animate({
            "opacity": 1.0
        }, transitionTime);
    });
}

$('.switch').change(function() { updateCvItems() });
