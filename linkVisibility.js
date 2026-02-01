document.addEventListener('DOMContentLoaded', function () {
    // Function to set up field visibility logic
    function setupFieldVisibility() {
        const landingPageCheckbox = document.querySelector("#landingPage");

        const firstPage = document.querySelector('[data-testid="property-edit-firstPage"]');
        const secondPage = document.querySelector('[data-testid="property-edit-secondPage"]');
        const time = document.querySelector('[data-testid="property-edit-time"]');
        
        // const enableException = document.querySelector('[data-testid="property-edit-enableException"]');
        // const exceptionLocations = document.querySelector('[data-testid="property-edit-exceptionLocations"]');
        // const tags = document.querySelector('[data-testid="property-edit-tags"]');

        const profilePictureFile = document.querySelector('[data-testid="property-edit-profilePictureFile"]');
        const backgroundImageFile = document.querySelector('[data-testid="property-edit-backgroundImageFile"]');
        const name = document.querySelector('[data-testid="property-edit-name"]');
        const nameStyles = document.querySelector('[data-testid="property-edit-nameStyles"]');
        const bio = document.querySelector('[data-testid="property-edit-bio"]');
        const bioStyles = document.querySelector('[data-testid="property-edit-bioStyles"]');
        const themeDesign = document.querySelector('[data-testid="property-edit-themeDesign"]');
        const buttonStyle = document.querySelector('[data-testid="property-edit-buttonStyle"]');
        const links = document.querySelector('[data-testid="property-edit-links"]');
        const linkImageFile = document.querySelector('[data-testid="property-edit-linkImageFile"]');
        const instagram = document.querySelector('[data-testid="property-edit-instagram"]');
        const twitter = document.querySelector('[data-testid="property-edit-twitter"]');
        const snapchat = document.querySelector('[data-testid="property-edit-snapchat"]');
        const youtube = document.querySelector('[data-testid="property-edit-youtube"]');
        const telegram = document.querySelector('[data-testid="property-edit-telegram"]');
        const tiktok = document.querySelector('[data-testid="property-edit-tiktok"]');
        const online = document.querySelector('[data-testid="property-edit-online"]');
        const city = document.querySelector('[data-testid="property-edit-city"]');
        const responseTime = document.querySelector('[data-testid="property-edit-responseTime"]');
        const promotion = document.querySelector('[data-testid="property-edit-promotion"]');
        const googleAnalytics = document.querySelector('[data-testid="property-edit-googleAnalytics"]');
        const facebookPixelId = document.querySelector('[data-testid="property-edit-facebookPixelId"]');

        function hideElement(element, hide = true) {
            if (element) element.style.display = hide ? 'none' : '';
        }

        if (!landingPageCheckbox || !firstPage || !secondPage) {
            return;
        }

        function updateFieldVisibility(isChecked) {
            console.log('isChecked =>', isChecked);
            if (isChecked) {
                hideElement(firstPage);
                hideElement(secondPage);
                hideElement(time);
                // hideElement(enableException);
                // hideElement(exceptionLocations);
                // hideElement(tags);

                hideElement(profilePictureFile, false);
                hideElement(backgroundImageFile, false);
                hideElement(name, false);
                hideElement(nameStyles, false);
                hideElement(bio, false);
                hideElement(bioStyles, false);
                hideElement(themeDesign, false);
                hideElement(buttonStyle, false);
                hideElement(links, false);
                hideElement(linkImageFile, false)
                hideElement(instagram, false);
                hideElement(twitter, false);
                hideElement(snapchat, false);
                hideElement(youtube, false);
                hideElement(telegram, false);
                hideElement(tiktok, false);
                hideElement(online, false);
                hideElement(city, false);
                hideElement(responseTime, false);
                hideElement(promotion, false);
                hideElement(googleAnalytics, false);
                hideElement(facebookPixelId, false);
            } else {
                hideElement(firstPage, false);
                hideElement(secondPage, false);
                hideElement(time, false);
                // hideElement(enableException, false);
                // hideElement(exceptionLocations, false);
                // hideElement(tags, false);

                hideElement(profilePictureFile);
                hideElement(backgroundImageFile);
                hideElement(name);
                hideElement(nameStyles);
                hideElement(bio);
                hideElement(bioStyles);
                hideElement(themeDesign);
                hideElement(buttonStyle);
                hideElement(links);
                hideElement(linkImageFile);
                hideElement(instagram);
                hideElement(twitter);
                hideElement(snapchat);
                hideElement(youtube);
                hideElement(telegram);
                hideElement(tiktok);
                hideElement(online);
                hideElement(city);
                hideElement(responseTime);
                hideElement(promotion);
                hideElement(googleAnalytics);
                hideElement(facebookPixelId);
            }
        }

        updateFieldVisibility(landingPageCheckbox.checked);

        landingPageCheckbox.addEventListener('change', function (event) {
            const isChecked = !event.target.checked;
            console.log('Checkbox checked state:', isChecked);
            updateFieldVisibility(isChecked);
        });

        // Check if the next sibling element is an <a> tag
        const nextElement = landingPage.nextElementSibling;

        if (nextElement && nextElement.tagName === 'A') {
            // Add a click event listener to the <a> tag
            nextElement.addEventListener('click', function(event) {
                console.log('A checked state:', landingPageCheckbox.checked);
                updateFieldVisibility(!landingPageCheckbox.checked);
            });
        }
    }

    setupFieldVisibility();

    // Set up a MutationObserver to detect when the form is loaded
    const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // Check if the form fields are present
                if (mutation.target?.innerText?.indexOf('Drop your file here,') !== 0) {
                    const landingPageCheckbox = document.querySelector("#landingPage");
                    if (landingPageCheckbox) {
                        setupFieldVisibility();
                        // observer.disconnect();
                        break;
                    }
                }
            }
        }
    });

    // Observe the main container where the form will be injected
    const adminContainer = document.querySelector('#app');
    if (adminContainer) {
        observer.observe(adminContainer, { childList: true, subtree: true });
    }
});
