import { Panel, Stack, ButtonGroup, Button, AvatarGroup, Avatar } from 'rsuite';
import './style.scss'

const QnaList = () => (
  <div className='qna-container-super'>
        <Panel className='qna-container-main'
            bordered
            header={
            <Stack justifyContent="space-between">
                <span>Top Questions</span>
                <ButtonGroup>
                <Button active>Interesting</Button>
                <Button>Hot</Button>
                <Button>Week</Button>
                <Button>Month</Button>
                </ButtonGroup>
            </Stack>
            }
            >
            <div className='qna-container-sub'>
                <div className='question-block'>
                    <h6>
                        I've heard that having a comprehensive profile can increase my chances of getting noticed by colleges. Could you provide some tips or suggestions on how to make my profile stand out?
                    </h6>
                    <AvatarGroup size="xs" spacing={6}>
                        <Avatar circle src="https://avatars.githubusercontent.com/u/12592949" alt="@superman66" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/8225666" alt="@SevenOutman" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/15609339" alt="@hiyangguo" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/14308293" alt="@MarvelSQ" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/1203827" alt="@simonguo" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/9625224" alt="@theJian" />
                        </AvatarGroup>
                    <hr></hr>
                </div>
                <div className='question-block'>
                    <h6>I'm starting my college search journey and feeling a bit overwhelmed. Can you walk me through how I can effectively use the search and filtering features on your platform to narrow down my options?
                    </h6>
                    <AvatarGroup size="xs" spacing={6}>
                        <Avatar circle src="https://avatars.githubusercontent.com/u/12592949" alt="@superman66" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/8225666" alt="@SevenOutman" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/15609339" alt="@hiyangguo" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/14308293" alt="@MarvelSQ" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/1203827" alt="@simonguo" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/10924138" alt="@zmhawk" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/2797600" alt="@posebear1990" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/23637144" alt="@Sleaf" />
                    </AvatarGroup>
                    <hr></hr>
                </div>
                <div className='question-block'>
                    <h6>Attending webinars seems like a great way to gain insights and stay informed about college-related topics. How can I access the schedule of upcoming webinars, and are there any registration requirements?
                    </h6>
                    <AvatarGroup size="xs" spacing={6}>
                        <Avatar circle src="https://avatars.githubusercontent.com/u/1203827" alt="@simonguo" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/9625224" alt="@theJian" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/15884443" alt="@LeightonYao" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/10924138" alt="@zmhawk" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/2797600" alt="@posebear1990" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/23637144" alt="@Sleaf" />
                    </AvatarGroup>
                    <hr></hr>
                </div>
                <div className='question-block'>
                    <h6>I have specific criteria in mind for the colleges I'm interested in, such as location, size, and available majors. How granular can I get with the search filters, and are there any advanced search options available?
                    </h6>
                    <AvatarGroup size="xs" spacing={6}>
                        <Avatar circle src="https://avatars.githubusercontent.com/u/1203827" alt="@simonguo" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/15884443" alt="@LeightonYao" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/10924138" alt="@zmhawk" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/2797600" alt="@posebear1990" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/23637144" alt="@Sleaf" />
                    </AvatarGroup>
                    <hr></hr>
                </div>
                <div className='question-block'>
                    <h6>I'm curious about the methodology used to rank colleges on your platform. Can you provide insights into how colleges are evaluated and ranked, and whether user reviews or ratings are factored into the rankings?
                    </h6>
                    <AvatarGroup size="xs" spacing={6}>
                        <Avatar circle src="https://avatars.githubusercontent.com/u/2797600" alt="@posebear1990" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/23637144" alt="@Sleaf" />
                    </AvatarGroup>
                    <hr></hr>
                </div>
                <div className='question-block'>
                    <h6>I'm interested in booking a counseling session, but I'm not sure about the process. Can you explain how I can schedule an appointment, including any prerequisites or availability constraints?
                    </h6>
                    <AvatarGroup size="xs" spacing={6}>
                        <Avatar circle src="https://avatars.githubusercontent.com/u/1203827" alt="@simonguo" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/2797600" alt="@posebear1990" />
                        <Avatar circle src="https://avatars.githubusercontent.com/u/23637144" alt="@Sleaf" />
                    </AvatarGroup>
                    <hr></hr>
                </div>
            </div>
        </Panel>
    </div>  
);

export default QnaList;