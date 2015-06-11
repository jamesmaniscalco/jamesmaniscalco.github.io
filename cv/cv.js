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
        title: 'H'+'c2'.sub()+' Measurements of Nb'+'3'.sub()+'Sn and Nitrogen-Doped Niobium Using Physical Property Measurement System',
        authors: 'J. T. Maniscalco'.bold()+', D. Gonnella, D. L. Hall, M. Liepe, S. Posen',
        firstAuthor: true,
        type: 'proceedings',
        journal: 'Proceedings of the 6'+'th'.sup()+' International Particle Accelerator Conference (IPAC)',
        published: false,
        status: 'accepted, pending publication',
        downloadUrl: 'https://jacowfs.jlab.org/conf/y15/ipac15/prepress/WEPTY075.PDF',
        year: 2015
    },
    {
        title: 'RF Performance Studies of Thin-Film Superconductors Using a Sample Host Cavity',
        authors: 'J. T. Maniscalco'.bold()+', D. L. Hall, M. Liepe',
        firstAuthor: true,
        type: 'proceedings',
        journal: 'Proceedings of the 6'+'th'.sup()+' International Particle Accelerator Conference (IPAC)',
        published: false,
        status: 'accepted, pending publication',
        downloadUrl: 'https://jacowfs.jlab.org/conf/y15/ipac15/prepress/WEPTY076.PDF',
        year: 2015
    },
    {
        title: 'The Potential of Accelerating Early Detection of Autism through Content Analysis of YouTube Videos',
        authors: 'V. A. Fusaro, J. Daniels, M. Duda, T. F. DeLuca, O. D’Angelo, J. Tamburello, '+'J. T. Maniscalco'.bold()+', D. P. Wall',
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
    $(newElement).append('<div class="pubJournal">'+item.journal+' '+(item.published ? ', '+item.year+'.' : ('('+item.status+')').italics()+'.')+'</div>');
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
        if ($('#otherType').prop('checked')) {
            $('.cvItem').addClass('hide');
            $('.cvItem:not(.proceedings):not(.peer-reviewed)').removeClass('hide');
        };
    } else {
        if ($('#allTypes').prop('checked')) {
            $('.cvItem').addClass('hide');
            $('.cvItem.supportingAuthor').removeClass('hide');
        };
        if ($('#peerReviewed').prop('checked')) {
            $('.cvItem').addClass('hide');
            $('.cvItem.peer-reviewed.supportingAuthor').removeClass('hide');
        };
        if ($('#proceedings').prop('checked')) {
            $('.cvItem').addClass('hide');
            $('.cvItem.proceedings.supportingAuthor').removeClass('hide');
        };
        if ($('#otherType').prop('checked')) {
            $('.cvItem').addClass('hide');
            $('.cvItem.supportingAuthor:not(.proceedings):not(.peer-reviewed)').removeClass('hide');
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
