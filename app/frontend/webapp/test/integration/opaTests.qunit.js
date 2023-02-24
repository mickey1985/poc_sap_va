sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'frontend/test/integration/FirstJourney',
		'frontend/test/integration/pages/SalesYearList',
		'frontend/test/integration/pages/SalesYearObjectPage'
    ],
    function(JourneyRunner, opaJourney, SalesYearList, SalesYearObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('frontend') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSalesYearList: SalesYearList,
					onTheSalesYearObjectPage: SalesYearObjectPage
                }
            },
            opaJourney.run
        );
    }
);