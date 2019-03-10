;(($) => {
    $(document).ready(() => {
        $( '.contact__map' ).lazyLoadGoogleMaps(
            {
                callback: function( container, map )
                {
                    let $container  = $( container ),
                        center      = new google.maps.LatLng(  45.520562, -122.677438 );

                    map.setOptions({ zoom: 15, center: center });
                    new google.maps.Marker({ position: {lat: 45.527562, lng: -122.677438}, map: map, icon: 'assets/img/pin.svg' });
                },
                key: 'AIzaSyBbbG0hmgpu6gKDAxeEVPtAZlTyuZ2Cxmc',
                signed_in: true
            });
    })
}) (jQuery);
