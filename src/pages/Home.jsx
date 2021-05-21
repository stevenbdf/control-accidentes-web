/* eslint-disable jsx-a11y/media-has-caption */
import Marquee from 'react-fast-marquee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { show } from '../store/config/actions';
import { fetch } from '../store/charts/actions';
import { getTodayDate, formatDate, dateDiffInDays } from '../helpers/utilities';
import Carousel from '../components/Carousel';
import ChartCarousel from '../components/ChartCarousel';
import VideoCarousel from '../components/VideoCarousel';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.config.isLoading);
  const isChartLoading = useSelector((state) => state.charts.isLoading);
  const config = useSelector((state) => state.config.config);
  const charts = useSelector((state) => state.charts.charts);
  const [isInfoLoading, setIsInfoLoading] = useState(false);

  const backgroundInterface = localStorage.getItem('backgroundInterface');
  const textInterface = localStorage.getItem('textInterface');
  const backgroundMarquee = localStorage.getItem('backgroundMarquee');
  const textMarquee = localStorage.getItem('textMarquee');
  const backgroundInformation = localStorage.getItem('backgroundInformation');
  const textInformation = localStorage.getItem('textInformation');
  const backgroundChart = localStorage.getItem('backgroundChart');
  const borderChart = localStorage.getItem('borderChart');
  const showBgImage = JSON.parse(localStorage.getItem('showBgImage'));
  const infoBackgroundImage = localStorage.getItem('infoBackgroundImage');

  useEffect(() => {
    dispatch(show({ id: 1 }));
    dispatch(fetch());
    setInterval(() => {
      setIsInfoLoading(true);
      setTimeout(() => {
        setIsInfoLoading(false);
      });
    }, 600000);
  }, []);

  return (
    <div>
      <div className="w-full flex justify-end">
        <NavLink to="/configuration">
          <FontAwesomeIcon className="text-gray-400 text-2xl mr-4" icon={faCog} />
        </NavLink>
      </div>
      <div className="flex space-x-2 justify-center pb-5 items-stretch" style={{ minHeight: '90vh', maxHeight: '93vh' }}>
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
                  config.display_media
                  && (
                    <div
                      style={{ backgroundColor: backgroundInterface, borderColor: textInterface || 'black' }}
                      className={`${config.display_main_info || config.display_charts ? 'w-3/5' : 'w-full'}
                      border-2 flex flex-col justify-center items-center rounded-lg md:text-center`}
                    >
                      {/* Static image media */}
                      {
                        config.media_id === '1'
                        && (
                          <div className="w-full h-full flex items-center justify-center">
                            <img
                              style={{ maxWidth: '100%', maxHeight: '100%' }}
                              src={config.media.files[0]?.url}
                              alt={config.media.files[0]?.name}
                            />
                          </div>
                        )
                      }
                      {
                        config.media_id === '2'
                        && (
                          <VideoCarousel videos={config.media?.files.map(({ url }) => url)} />
                        )
                      }
                      {
                        config.media_id === '3'
                        && <Carousel images={config.media?.files.map(({ name, url }) => ({ name, url }))} />
                      }
                    </div>
                  )
                }
                {
                  (config.display_main_info || config.display_charts)
                  && (
                    <div
                      className={`${config.display_media ? 'w-2/5' : 'w-full'} h-auto flex flex-col items-stretch`}
                    >
                      {
                        config.display_main_info
                        && (
                          <div
                            className={`w-full flex flex-col  items-center justify-center border-2 rounded-lg space-y-10 md:text-center
                            ${config.display_charts || !config.display_main_info ? 'mb-2' : ''}`}
                            style={{
                              height: config.display_charts ? '45vh' : '90vh',
                              borderColor: textInformation || 'gray',
                              color: textInformation,
                              backgroundImage: showBgImage ? `url(${infoBackgroundImage})` : undefined,
                              backgroundSize: 'cover',
                              backgroundColor: showBgImage ? undefined : backgroundInformation,
                            }}
                          >
                            {
                              !isInfoLoading
                              && (
                                <>
                                  <div className="text-3xl font-bold">{getTodayDate()}</div>
                                  <div className="text-lg lg:text-4xl mt-8">{config.main_info_text}</div>
                                  <div className="text-6xl lg:text-7xl font-bold my-16">
                                    {
                                      dateDiffInDays(new Date(`${config.last_accident}T12:00:00Z`), new Date())
                                    }
                                  </div>
                                  <div className="text-2xl lg:text-3xl xl:text-4xl font-semibold">
                                    Desde
                                    {' '}
                                    {formatDate(new Date(`${config.last_accident}T12:00:00Z`))}
                                  </div>
                                </>
                              )
                            }
                          </div>
                        )
                      }
                      {
                        config.display_charts
                        && (
                          <div
                            className="w-full flex items-center justify-center border-2 rounded-lg p-5 bg-white"
                            style={{ height: config.display_main_info ? '45vh' : '90vh', backgroundColor: backgroundChart, borderColor: borderChart }}
                          >
                            {
                              isChartLoading
                                ? <CircularProgress />
                                : (
                                  <ChartCarousel data={charts} fontColor={borderChart} />
                                )
                            }
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
      <Marquee
        speed={75}
        style={{
          height: '5vh', width: '100%', backgroundColor: backgroundMarquee || 'black', color: textMarquee || 'white',
        }}
        className="overflow-hidden w-full flex items-center -mt-4 mb-0"
        gradient={false}
      >
        <p style={{ width: '100vw' }} className="font-bold text-4xl align-middle">{config?.marquee_text}</p>
      </Marquee>
    </div>
  );
};

export default Home;
