import Marquee from 'react-fast-marquee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Bar } from 'react-chartjs-2';
import { show } from '../store/config/actions';
import { getTodayDate, formatDate, dateDiffInDays } from '../helpers/utilities';
import Carousel from '../components/Carousel';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.config.isLoading);
  const config = useSelector((state) => state.config.config);

  console.log(config);

  useEffect(() => {
    dispatch(show({ id: 1 }));
  }, []);

  return (
    <>
      <div className="w-full flex justify-end">
        <NavLink to="/configuration">
          <FontAwesomeIcon className="text-gray-400 text-2xl my-1 mr-4" icon={faCog} />
        </NavLink>
      </div>
      <div className="flex items-start space-x-2 justify-center pb-5" style={{ minHeight: '92vh' }}>
        {
          isLoading
            ? (
              <div className="flex justify-center items-center h-screen">
                <CircularProgress />
              </div>
            )
            : (
              <>
                {
                  config.display_main_info
                  && (
                    <div className="w-1/2 border-2 border-gray-300 flex flex-col justify-center space-y-16 items-center rounded-lg md:text-center py-8">
                      <div className="text-6xl md:text-3xl lg:text-4xl font-semibold">{getTodayDate()}</div>
                      <div className="text-3xl md:text-lg lg:text-xl xl:text-2xl mt-8">{config.main_info_text}</div>
                      <div className="text-9xl md:text-6xl lg:text-7xl xl:text-8xl font-bold my-16">
                        {
                          dateDiffInDays(new Date(`${config.last_accident}T12:00:00Z`), new Date())
                        }
                      </div>
                      <div className="text-5xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                        Desde
                        {' '}
                        {formatDate(new Date(`${config.last_accident}T12:00:00Z`))}
                      </div>
                    </div>
                  )
                }
                {
                  (config.display_media || config.display_charts)
                  && (
                  <div className="w-1/2 h-auto border-2 border-gray-300 flex flex-col rounded-lg">
                      {
                        config.display_media
                        && (
                          <div className="w-full flex items-center justify-center" style={{ height: config.display_charts ? '45vh' : '49.5vh' }}>
                            {/* Static image media */}
                            {
                              config.media_id === '1'
                              && (
                                <div className="w-full h-full flex items-center justify-center">
                                  <img
                                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                                    src={config.media.files[0].url}
                                    alt={config.media.files[0].name}
                                  />
                                </div>
                              )
                            }
                            {
                              config.media_id === '2'
                              && (
                                <div className="w-full h-full flex items-center justify-center">
                                  <video className="h-full" src={config.media.files[0].url} autoPlay loop>
                                    <track
                                      default
                                      kind="captions"
                                      srcLang="es"
                                      src={config.media.files[0].url}
                                    />
                                    Lo sentimos, su navegador no soporta videos
                                  </video>
                                </div>
                              )
                            }
                            {
                              config.media_id === '3'
                              && <Carousel images={config.media.files.map(({ name, url }) => ({ name, url }))} />
                            }
                          </div>
                        )
                      }
                      {
                        config.display_charts
                        && (
                          <div className="w-full flex items-center justify-center p-5" style={{ height: config.display_media ? '45vh' : '49.5vh' }}>
                            <Bar
                              data={{
                                labels: ['a', 'b'],
                                datasets: [
                                  {
                                    label: 'Bar - Set 1',
                                    fillColor: 'rgba(220,220,220,0.5)',
                                    strokeColor: 'rgba(220,220,220,0.8)',
                                    highlightFill: 'rgba(220,220,220,0.75)',
                                    highlightStroke: 'rgba(220,220,220,1)',
                                    data: [65, 34],
                                    backgroundColor: ['#AF32', 'blue', 'green', 'blue', 'red', 'blue'],
                                  },
                                ],
                              }}
                              options={{
                                maintainAspectRatio: false,
                                title: {
                                  display: true,
                                  text: 'Average Rainfall per month',
                                  fontSize: 20,
                                },
                                legend: {
                                  display: false,
                                  position: 'right',
                                },
                              }}
                            />
                          </div>
                        )
                      }
                  </div>
                  )
                }
              </>
            )
        }
      </div>
      <Marquee speed={75} style={{ height: '5vh', width: '100%' }} className="overflow-hidden w-full flex items-center bg-eastern-blue-500 text-white -mt-4 mb-0" gradient={false}>
        <p style={{ width: '100vw' }} className="font-bold xl:text-2xl align-middle">{config?.marquee_text}</p>
      </Marquee>
    </>
  );
};

export default Home;
